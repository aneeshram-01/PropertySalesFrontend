import { useTheme } from "next-themes"; // Import the hook to get the current theme

const people = [
  {
    name: 'Ranith',
    role: 'Co-Founder',
    imageUrl: './Ramith.jpeg',
  },
  {
    name: 'Darren',
    role: 'Founder / CEO',
    imageUrl: './Darren.jpeg',
  },
  {
    name: 'Aneesh',
    role: 'Co-Founder',
    imageUrl: './Aneesh.jpeg',
  },
];

export default function Example() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`py-24 sm:py-32 min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`} // Apply conditional styling for dark and light modes
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="ml-auto text-center">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Our team
          </h2>
          <p className={`mt-6 text-lg leading-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul role="list" className="flex justify-center space-x-10 pt-4">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center space-y-4">
              <img
                alt=""
                src={person.imageUrl}
                className="h-32 w-32 rounded-full transition-transform duration-500 hover:scale-105" // Add hover effect
              />
              <div className="text-center">
                <h3 className={`text-lg font-semibold leading-7 tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {person.name}
                </h3>
                <p className={`text-sm font-semibold leading-6 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}>
                  {person.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
