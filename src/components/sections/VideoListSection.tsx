"use client";


const videos = [
  {
    title: "Labour Movement in India: A Discussion With Amarjeet Kaur",
    subtitle: "On 20 May 2025, workers from across India will go on a nationwide general strike. The strike has been called by the Joint Platform of Central Trade Unions against the four labour codes...",
    thumbnail: "https://spi.org.in/wp-content/uploads/2025/03/Screenshot-2025-03-22-132019.png",
    url: "https://spi.org.in/commentary/labour-movement-in-india-a-discussion-with-amarjeet-kaur/",
  },
  {
    title: "Myths, Pseudo-science, Superstition, Fanaticism | The Importance of Scientific Temper in India",
    subtitle: "On 18 January 2025, IIT Bombay organized a lecture on 'Garbhavigyan', the science of begetting a good progeny...",
    thumbnail: "/video2.jpg",
    url: "https://spi.org.in/commentary/myths-pseudo-science-superstition-fanaticism-the-importance-of-scientific-temper-in-india/",
  },
  {
    title: "The Historical Context And Contemporary Developments of Left and Right Wing Political Movements",
    subtitle: "A Discussion with Prof Ajit Jha. The terminology of Left and Right wing politics emerged in the late 18th century...",
    thumbnail: "/video3.jpg",
    url: "https://spi.org.in/commentary/the-historical-context-and-contemporary-developments-of-left-and-right-wing-political-movements/",
  },
  {
    title: "Agricultural Crisis in India and the Farmer’s Movement | A Discussion with Dr Ashok Dhawale",
    subtitle: "In 2014, Narendra Modi had come to power with the promise of ending the agricultural crisis in India...",
    thumbnail: "/video4.jpg",
    url: "https://spi.org.in/commentary/agricultural-crisis-in-india-and-the-farmers-movement-a-discussion-with-dr-ashok-dhawale/",
  },
  {
    title: "Rise of Communalism and Hatred in India: A Discussion with Harsh Mander",
    subtitle: "The 10 years of Modi Raj witnessed an unprecedented rise in communalism and hate in India...",
    thumbnail: "/video5.jpg",
    url: "https://spi.org.in/commentary/rise-of-communalism-and-hatred-in-india-a-discussion-with-harsh-mander/",
  },
  {
    title: "Economic Inequality In India: A Discussion with Professor Arun Kumar",
    subtitle: "A discussion on economic inequality in India with Professor Arun Kumar...",
    thumbnail: "/video6.jpg",
    url: "https://spi.org.in/commentary/economic-inequality-in-india-a-discussion-with-professor-arun-kumar/",
  },
  {
    title: "Violence Against Women In India | A Discussion with Professor Roop Rekha Verma",
    subtitle: "A discussion on violence against women in India with Professor Roop Rekha Verma...",
    thumbnail: "/video7.jpg",
    url: "https://spi.org.in/commentary/violence-against-women-in-india-a-discussion-with-professor-roop-rekha-verma/",
  },
  {
    title: "Unveiling the Truth: Is the Yogi Adityanath Government Conspiring Against UP’s People?",
    subtitle: "In this video, we dive deep into allegations surrounding the Yogi Adityanath-led government in Uttar Pradesh...",
    thumbnail: "/video8.jpg",
    url: "https://spi.org.in/commentary/unveiling-the-truth-is-the-yogi-adityanath-government-conspiring-against-ups-people/",
  },
  {
    title: "34 Washerfolk families without toilets in IIT Kanpur face eviction",
    subtitle: "This video dives into the shocking reality of 34 Scheduled Caste washerfolk families at IIT Kanpur...",
    thumbnail: "/video9.jpg",
    url: "https://spi.org.in/commentary/34-washerfolk-families-without-toilets-in-iit-kanpur-face-eviction/",
  },
  {
    title: "Amit Shah has no idea of deep ethnic divide in Manipur",
    subtitle: "In this video, we dive into the ongoing crisis in Manipur, exploring the deep ethnic divide that continues to fuel tensions...",
    thumbnail: "/video10.jpg",
    url: "https://spi.org.in/commentary/amit-shah-has-no-idea-of-deep-ethnic-divide-in-manipur/",
  },
  {
    title: "US can’t dominate upright Zelenskyy | Prof. Sandeep Pandey",
    subtitle: "Dive into this thought-provoking analysis exploring why the U.S. struggles to assert dominance over an unwavering Zelensky...",
    thumbnail: "/video11.jpg",
    url: "https://spi.org.in/commentary/us-cant-dominate-upright-zelenskyy-prof-sandeep-pandey/",
  },
  {
    title: "Trump’s atrocious idea about Gaza | Prof. Sandeep Pandey",
    subtitle: "A discussion on Trump's idea about Gaza with Prof. Sandeep Pandey...",
    thumbnail: "/video12.jpg",
    url: "https://spi.org.in/commentary/trumps-atrocious-idea-about-gaza-prof-sandeep-pandey/",
  },
];

const VideoListSection = () => {
  return (
    <section className="w-full bg-[#1a2733] bg-opacity-90 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">DHAROHAR SERIES</h2>
        {/* Tabs removed as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, 9).map((video, idx) => (
            <div key={idx} className="flex items-center bg-[#223040] bg-opacity-80 rounded-xl overflow-hidden shadow-lg mb-2">
              <div className="w-32 h-20 flex-shrink-0 relative">
                <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                <a href={video.url} className="absolute inset-0 flex items-center justify-center group">
                  <span className="bg-white bg-opacity-80 rounded-full p-2 group-hover:bg-[#e5484d] transition">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2733" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white">
                      <polygon points="9.5,7.5 16.5,12 9.5,16.5" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="flex-1 px-4 py-2">
                <div className="text-white font-bold text-lg leading-tight">{video.title}</div>
                <div className="text-gray-300 text-sm truncate max-w-xs">{video.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-[#1a2733] font-semibold px-8 py-2 rounded-full shadow hover:bg-[#e5484d] hover:text-white transition">View All</button>
        </div>
      </div>
    </section>
  );
};

export default VideoListSection;
