import React, { useState } from 'react';
import { useUser } from "../context/user.context";
import axios from "../config/axios";

function Home() {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");


  function createProject(e) {
    // Handle project creation logic here
    e.preventDefault();
    console.log(projectName);
    setIsModalOpen(false)
    setProjectName("")

    axios.post("/projects/create", { name: projectName }, {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
  }

  return (
    <main className='p-4'>
      <div className='projects'>
        <button
          className='project p-4 border border-slate-300 rounded-md flex items-center space-x-2'
          onClick={() => setIsModalOpen(true)}
        >
          <i className="ri-link text-white text-xl"></i>
          <h5 className="text-2xl font-bold text-white">New Project</h5>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Create Project</h2>
            <form
              onSubmit={createProject}
            >
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="projectName">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-600 text-white p-2 rounded mr-2 hover:bg-gray-700 transition duration-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;