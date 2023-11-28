import { useNavigate } from 'react-router-dom'
import boongOBbang from '/images/letter_redbean.png'

const ErrorNotice = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center">
            <div className="relative w-full flex flex-col justify-center">
                <div className="w-full flex justify-center">
                    <img
                        src={boongOBbang}
                        alt="boongOBbang image"
                        className="w-56"
                    />
                    <div className="absolute top-3 flex text-white text-4xl">404</div>
                </div>
                <div className="flex justify-center m-1 text-white text-3xl min-[550px]:text-4xl">Page Not Found!</div>
                <div className="flex justify-center text-white text-xl min-[550px]:text-3xl">요청하신 페이지를 찾을 수 없습니다😢</div>
                <div className="w-full flex justify-center ">
                    <div 
                        className="flex p-2 mt-10 justify-center bg-white text-lg min-[550px]:text-xl"
                        onClick={() => navigate('/')}
                        >
                        홈으로 이동하기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorNotice