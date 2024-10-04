const people = [
    {
      name: 'Ranith',
      role: 'Co-Founder',
      imageUrl: '',
    },
    {
      name: 'Darren',
      role: 'Co-Founder / CEO',
      imageUrl: '',
    },
    {
      name: 'Aneesh',
      role: 'Co-Founder',
      imageUrl: '',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ml-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
          <ul role="list" className="flex justify-center space-x-10">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col items-center space-y-4">
                <img alt="" src={person.imageUrl} className="h-32 w-32 rounded-full" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  