const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4">Hi, Admin (admin)</span>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="px-8 py-6">
        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center">
            <div className="text-3xl mr-4">👤</div>
            <div>
              <h2 className="font-semibold">Completed Survey</h2>
              <p className="text-xl font-bold">12682</p>
            </div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center">
            <div className="text-3xl mr-4">📋</div>
            <div>
              <h2 className="font-semibold">Terminated Survey</h2>
              <p className="text-xl font-bold">43731</p>
            </div>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md flex items-center">
            <div className="text-3xl mr-4">📄</div>
            <div>
              <h2 className="font-semibold">Quota Full</h2>
              <p className="text-xl font-bold">5682</p>
            </div>
          </div>
          <div className="bg-teal-500 text-white p-4 rounded-lg shadow-md flex items-center">
            <div className="text-3xl mr-4">📊</div>
            <div>
              <h2 className="font-semibold">Total Survey</h2>
              <p className="text-xl font-bold">62095</p>
            </div>
          </div>
        </div>

        {/* All Surveys Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">All Survey</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">#</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Project ID</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Respondent ID</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">IP Address</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1</td>
                  <td className="border border-gray-200 px-4 py-2">GO11142417</td>
                  <td className="border border-gray-200 px-4 py-2">kjty5ygruf1ks</td>
                  <td className="border border-gray-200 px-4 py-2">129.222.206.221</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 06:03:50</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Complete</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2</td>
                  <td className="border border-gray-200 px-4 py-2">GO11142417</td>
                  <td className="border border-gray-200 px-4 py-2">kjty5ygruf1ks</td>
                  <td className="border border-gray-200 px-4 py-2">129.222.206.221</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 06:03:50</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg">Terminate</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">3</td>
                  <td className="border border-gray-200 px-4 py-2">GO11092408</td>
                  <td className="border border-gray-200 px-4 py-2">ldjfkdjfDD</td>
                  <td className="border border-gray-200 px-4 py-2">88.130.61.4</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 05:55:54</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Complete</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">4</td>
                  <td className="border border-gray-200 px-4 py-2">GO11092408</td>
                  <td className="border border-gray-200 px-4 py-2">ldjfkdjfDD</td>
                  <td className="border border-gray-200 px-4 py-2">88.130.61.4</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 05:55:54</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Complete</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">5</td>
                  <td className="border border-gray-200 px-4 py-2">GO11092408</td>
                  <td className="border border-gray-200 px-4 py-2">ldjfkdjfDD</td>
                  <td className="border border-gray-200 px-4 py-2">88.130.61.4</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 05:55:54</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Complete</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">6</td>
                  <td className="border border-gray-200 px-4 py-2">GO11142417</td>
                  <td className="border border-gray-200 px-4 py-2">kjty5ygruf1ks</td>
                  <td className="border border-gray-200 px-4 py-2">129.222.206.221</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 06:03:50</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg">Terminate</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">7</td>
                  <td className="border border-gray-200 px-4 py-2">GO11092408</td>
                  <td className="border border-gray-200 px-4 py-2">ldjfkdjfDD</td>
                  <td className="border border-gray-200 px-4 py-2">88.130.61.4</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 05:55:54</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Complete</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">8</td>
                  <td className="border border-gray-200 px-4 py-2">GO11142417</td>
                  <td className="border border-gray-200 px-4 py-2">kjty5ygruf1ks</td>
                  <td className="border border-gray-200 px-4 py-2">129.222.206.221</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 06:03:50</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg">Terminate</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">9</td>
                  <td className="border border-gray-200 px-4 py-2">GO11142417</td>
                  <td className="border border-gray-200 px-4 py-2">kjty5ygruf1ks</td>
                  <td className="border border-gray-200 px-4 py-2">129.222.206.221</td>
                  <td className="border border-gray-200 px-4 py-2">2024-11-19 06:03:50</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg">Terminate</span>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
