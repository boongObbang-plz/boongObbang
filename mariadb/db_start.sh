service mariadb start;

cat /var/lib/mysql/.setup 2> /dev/null

mysql -e "CREATE DATABASE IF NOT EXISTS $DB_NAME";
mysql -e "CREATE USER IF NOT EXISTS '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'";
mysql -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'%'";
mysql -e "FLUSH PRIVILEGES";
mysql -e "ALTER USER '$DB_ROOT'@'localhost' IDENTIFIED BY '$DB_ROOT_PASSWORD'";

mysql $DB_NAME -u$DB_ROOT -p$DB_ROOT_PASSWORD
mysqladmin -u$DB_ROOT -p$DB_ROOT_PASSWORD shutdown

touch /var/lib/mysql/.setup

exec mysqld --console