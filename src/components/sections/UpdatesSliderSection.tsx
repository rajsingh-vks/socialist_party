
const updates = [
    {
      image: "./new_2.jpeg",
      alt: "Savitribai Phule Birth Anniversary",
      date: "February 2, 2026",
      title: "Savitribai Phule Birth Anniversary Celebrated",
      desc: "Savitribai Phule Birth Anniversary Celebrated at Vijayawada Press Club",
      link: "#",
    },
    {
      image: "./new_3.jpeg",
      alt: "Kapunadu Meeting",
      date: "February 2, 2026",
      title: "Socialist Party (India) Leaders Attend Kapunadu Meeting",
      desc: "Socialist Party (India) Leaders Attend Kapunadu Meeting and State Committee Convocation in Visakhapatnam",
      link: "#",
    },
    {
      image: "./new_4.jpeg",
      alt: "Ajit Doval Statement",
      date: "February 2, 2026",
      title: "Statement Condemning Ajit Doval’s Remark",
      desc: "The statement made by Ajit Doval is a grave insult to India’s history.",
      link: "#",
    },
  ];

  const UpdatesSliderSection = () => {
    return (
      <section className="w-full bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">More Updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-200 hover:bg-blue-600 hover:scale-[1.03] hover:shadow-xl group"
                  style={{ cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#e5484d'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
              >
                <img src={update.image} alt={update.alt} className="object-cover w-full h-48" />
                <div className="p-6 flex flex-col flex-1">
                    <span className="text-gray-500 mb-2 group-hover:text-white transition-colors">{update.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{update.title}</h3>
                    <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">{update.desc}</p>
                    <a href={update.link} className="flex items-center gap-1 text-red-600 font-semibold hover:underline mt-auto group-hover:text-white transition-colors">
                      READ MORE
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:stroke-white transition-colors">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };


export default UpdatesSliderSection;
