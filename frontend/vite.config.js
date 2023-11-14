import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@states": path.resolve(__dirname, "src/states"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [react()],
  server: {
		watch: {
			usePolling: true,
		},
		host: true, // needed for the Docker Container port mapping to work
		hmr: {
			clientPort: 5173,
		},
		strictPort: true,
		port: 5173, // you can replace this port with any port
	},
});
