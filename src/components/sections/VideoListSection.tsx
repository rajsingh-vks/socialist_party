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
		thumbnail: "https://spi.org.in/wp-content/uploads/2025/03/Screenshot-2025-03-22-133135.png",
		url: "https://spi.org.in/commentary/myths-pseudo-science-superstition-fanaticism-the-importance-of-scientific-temper-in-india/",
	},
	{
		title: "The Historical Context And Contemporary Developments of Left and Right Wing Political Movements",
		subtitle: "A Discussion with Prof Ajit Jha. The terminology of Left and Right wing politics emerged in the late 18th century...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2025/03/Screenshot-2025-03-22-131741.png",
		url: "https://spi.org.in/commentary/the-historical-context-and-contemporary-developments-of-left-and-right-wing-political-movements/",
	},
	{
		title: "Agricultural Crisis in India and the Farmer’s Movement | A Discussion with Dr Ashok Dhawale",
		subtitle: "In 2014, Narendra Modi had come to power with the promise of ending the agricultural crisis in India...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2025/03/Screenshot-2025-03-22-131554.png",
		url: "https://spi.org.in/commentary/agricultural-crisis-in-india-and-the-farmers-movement-a-discussion-with-dr-ashok-dhawale/",
	},
	{
		title: "Rise of Communalism and Hatred in India: A Discussion with Harsh Mander",
		subtitle: "The 10 years of Modi Raj witnessed an unprecedented rise in communalism and hate in India...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2025/03/Screenshot-2025-03-22-131126.png",
		url: "https://spi.org.in/commentary/rise-of-communalism-and-hatred-in-india-a-discussion-with-harsh-mander/",
	},
	{
		title: "Economic Inequality In India: A Discussion with Professor Arun Kumar",
		subtitle: "A discussion on economic inequality in India with Professor Arun Kumar...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2024/04/Sandeep-Pandey-Speech-10.png",
		url: "https://spi.org.in/commentary/economic-inequality-in-india-a-discussion-with-professor-arun-kumar/",
	},
	{
		title: "Violence Against Women In India | A Discussion with Professor Roop Rekha Verma",
		subtitle: "A discussion on violence against women in India with Professor Roop Rekha Verma...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2024/05/Screenshot-2024-05-27-115105.png",
		url: "https://spi.org.in/commentary/violence-against-women-in-india-a-discussion-with-professor-roop-rekha-verma/",
	},
	{
		title: "Unveiling the Truth: Is the Yogi Adityanath Government Conspiring Against UP’s People?",
		subtitle: "In this video, we dive deep into allegations surrounding the Yogi Adityanath-led government in Uttar Pradesh...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2024/12/Screenshot-2024-12-03-100600.png",
		url: "https://spi.org.in/commentary/unveiling-the-truth-is-the-yogi-adityanath-government-conspiring-against-ups-people/",
	},
	{
		title: "34 Washerfolk families without toilets in IIT Kanpur face eviction",
		subtitle: "This video dives into the shocking reality of 34 Scheduled Caste washerfolk families at IIT Kanpur...",
		thumbnail: "https://spi.org.in/wp-content/uploads/2024/12/Screenshot-2024-12-30-124638.png",
		url: "https://spi.org.in/commentary/34-washerfolk-families-without-toilets-in-iit-kanpur-face-eviction/",
	},
];

const VideoListSection = () => {
	return (
		<section className="w-full bg-[#1a2733] bg-opacity-90 py-12">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6">
				<h2 className="text-3xl font-bold text-white mb-6 tracking-wide">DHAROHAR SERIES</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{videos.slice(0, 9).map((video, idx) => (
						<div
							key={idx}
							className="flex items-stretch bg-[#223040] bg-opacity-80 rounded-xl overflow-hidden shadow-lg mb-2 min-h-[110px]"
						>
							<div className="w-32 flex-shrink-0 relative">
								<img
									src={video.thumbnail}
									alt={video.title}
									className="object-cover w-full h-full"
									style={{ minWidth: '8rem', minHeight: '5rem' }}
								/>
								<a
									href={video.url}
									className="absolute inset-0 flex items-center justify-center group"
									target="_blank" rel="noopener noreferrer"
								>
									<span className="bg-white bg-opacity-80 rounded-full p-2 group-hover:bg-[#e5484d] transition">
										<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2733" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white">
											<polygon points="9.5,7.5 16.5,12 9.5,16.5" fill="currentColor" />
										</svg>
									</span>
								</a>
							</div>
							<div className="flex-1 px-4 py-2 flex flex-col justify-center min-w-0">
								<div
									className="text-white font-bold text-base leading-tight mb-1 line-clamp-2"
									style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
									title={video.title}
								>
									{video.title}
								</div>
								<div
									className="text-gray-300 text-sm line-clamp-2"
									style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
									title={video.subtitle}
								>
									{video.subtitle}
								</div>
							</div>
						</div>
					))}
				</div>
				{/* <div className="flex justify-center mt-8">
					<button className="bg-white text-[#1a2733] font-semibold px-8 py-2 rounded-full shadow hover:bg-[#e5484d] hover:text-white transition">View All</button>
				</div> */}
			</div>
		</section>
	);
};

export default VideoListSection;
