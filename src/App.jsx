import { Toaster } from 'react-hot-toast'
import './App.css'
import AllRoutes from './routes/AllRoutes'
// use react query 
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 

// Create a client
const queryClient = new QueryClient()


function App() {

  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 1500,
      easing: 'ease-in-out',
    }); // Initialize AOS once
  }, []);

  return (
    <>
      {/* // Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
    <AllRoutes></AllRoutes>
    <Toaster/>
    </QueryClientProvider>
   
    </>
  )
}

export default App
