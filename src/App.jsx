// Import your components here
import Navbar from './components/Navbar';
import TaskManager from './components/TaskManager';
import Footer from './components/Footer';
import Api from './lib/Api'


function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              <TaskManager />
            </p>
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
             <Api />
          </p>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}

export default App; 
