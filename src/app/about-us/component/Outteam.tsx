const Ourteam = () => {
  
    const people = [
      {
        name: "Anna Cole",
        role: "Boss",
        picture: "https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg",
        description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
        facebookURL: "#link",
        twitterURL: "#link",
        linkedinURL: "#link",
        vineURL: "#link",
      },
      {
        name: "Luke Balmer",
        role: "Designer",
        picture: "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
        description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
        facebookURL: "#link",
        twitterURL: "#link",
        linkedinURL: "#link",
        vineURL: "#link",
      },
      {
        name: "Anna Cole",
        role: "Boss",
        picture: "https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg",
        description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
        facebookURL: "#link",
        twitterURL: "#link",
        linkedinURL: "#link",
        vineURL: "#link",
      },
      {
        name: "Luke Balmer",
        role: "Designer",
        picture: "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
        description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
        facebookURL: "#link",
        twitterURL: "#link",
        linkedinURL: "#link",
        vineURL: "#link",
      },
     
    ]
    
    return (
      <div className="mx-auto py-10 px-5 w-full max-w-7xl bg-gray-50">
        <div className="mx-auto max-w-5xl flex flex-col">
  
         
          <div className="mb-8 max-w-lg">
          
            <div className="w-full inline-flex items-center text-sm text-green-400 font-semibold uppercase tracking-wide">
              <span className="flex-shrink-0">Meet us</span>
              <span className="ml-3 w-full h-0.5 bg-green-400" />
            </div>
           
            <h2 className="text-3xl sm:text-5xl font-bold">
              Our Dedicated
              <span className="text-green-400"> Team</span>
            </h2>
            
            <p className="mt-4 text-sm">Repudiandae necessitatibus ad ipsum molestiae hic maiores quod cumque corrupti sapiente debitis aut, unde sint.</p>
          </div>
  
  
         
          <div>
            <ul className="grid grid-cols-4 gap-5">
              {people.map(person => (
                <li key={person.name} className="col-span-full sm:col-span-2 md:col-span-1 group relative mx-auto max-w-xs overflow-hidden">
              
                  <div className="sm:mb-4 sm:aspect-w-4 sm:aspect-h-5">
                    <img className="absolute w-full h-full object-cover shadow-md rounded-sm" src={person.picture} alt="" />
                  </div>
                  <div className="relative py-16 px-4 sm:p-0 flex flex-col bg-white sm:bg-transparent bg-opacity-40 group-hover:bg-opacity-80">
                   
                    <div className="mb-4 inline-flex space-x-2 transition-all delay-100 duration-300 ease-in transform -translate-x-96 sm:translate-x-0 group-hover:translate-x-0">
                   
                      <a href={person.facebookURL} className="text-green-400 hover:text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/></svg>
                      </a>
                    
                      <a href={person.twitterURL} className="text-green-400 hover:text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </a>
                    
                      <a href={person.linkedinURL} className="text-green-400 hover:text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
                      </a>
                     
                      <a href={person.vineURL} className="text-green-400 hover:text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path fillRule="evenodd" d="M 34.734375 2 C 27.839844 2 23.359375 7.203125 23.359375 14.101563 C 23.359375 20.878906 26.992188 26.6875 32.4375 29.347656 C 30.136719 33.703125 27.597656 37.820313 24.574219 40.722656 C 19.246094 34.308594 13.800781 25.335938 12.46875 9 L 4 9 C 7.75 36.46875 19.246094 45.5625 22.152344 47.257813 C 23.847656 48.226563 25.175781 48.226563 26.75 47.378906 C 29.171875 46.046875 35.582031 39.148438 39.578125 31.042969 C 41.269531 31.042969 44.0625 30.808594 46 30.445313 L 46 25 C 44.667969 25 42.601563 24.992188 41.515625 24.992188 C 35.585938 24.992188 30.742188 21.242188 30.742188 14.222656 C 30.742188 10.714844 32.316406 9.261719 34.253906 9.261719 C 36.070313 9.261719 37.519531 10.472656 37.519531 13.738281 C 37.519531 15.554688 37.035156 17.609375 36.671875 18.820313 C 36.671875 18.820313 38.367188 22.449219 43.449219 21 C 44.539063 18.699219 45.144531 15.671875 45.144531 13.132813 C 45.144531 6.113281 41.511719 2 34.734375 2 Z"/></svg>
                      </a>
                    </div>
                  
                    <h3 className="w-full inline-flex items-center text-xs text-green-400 uppercase tracking-wide transition-all duration-200 ease-in transform translate-y-20 sm:translate-y-0 group-hover:translate-y-0">
                      <span className="flex-shrink-0">{person.role}</span>
                      <span className="ml-3 w-1/4 h-0.5 bg-green-400" />
                    </h3>
                   
                    <h4 className="mb-2 text-3xl sm:text-lg text-black text-opacity-40 sm:text-opacity-100 font-extrabold sm:font-semibold transition-all duration-200 ease-in transform translate-y-20 sm:translate-y-0 group-hover:translate-y-0">{person.name}</h4>
                    
                    <p className="text-sm text-gray-600 transition-all duration-300 ease-in transform translate-x-96 sm:translate-x-0 group-hover:translate-x-0">{person.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default Ourteam