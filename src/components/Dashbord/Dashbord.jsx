import React from 'react';
import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

const Dashboard = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '14px',
        },
      },
    },
    colors: ['#3b82f6'],
    tooltip: {
      theme: 'light',
    },
  };

  const chartSeries = [
    {
      name: 'Patients',
      data: [120, 150, 180, 90, 200, 130],
    },
  ];

  const stats = [
    { label: 'Appointments', icon: 'calendar-days', value: 250 ,contant:'40% vs last month' },
    { label: 'New Patients', icon: 'user', value: 140, contant:'20% vs last month' },
    { label: 'Operations', icon: 'scissors', value: 56, contant:'15% vs last month' },
    { label: 'Earnings', icon: 'cash-register', value: 20250, prefix: '$', contant:'30% vs last month' },
  ];

  return (
    <>
      <div className="">
        <div className="text-blue-600 pb-6 font-bold">Dashboard</div>
        <div className="w-full h-[200px] pt-10 pl-10 bg-white">
          <div className="text-2xl">Good Morning, </div>
          <p>Have a nice day at work</p>
        </div>
        <div className="chart pt-5 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 h-[200px]">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md ">
                <div className="flex items-center mb-4 text-blue-900 p-3 text-3xl">
                  <i className={`fa-solid fa-${stat.icon}`}></i>
                </div>
                <h1 className="font-bold text-xl mb-2">{stat.label}</h1>

                <div className="text-2xl font-semibold text-gray-700 ">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={1.5}
                    separator=","
                    prefix={stat.prefix || ''}
                  />
                </div>
                <div className="pt-3">{stat.contant}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 h-[300px]">
        <div className="w-[800px] h-full bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Patient Stats</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
