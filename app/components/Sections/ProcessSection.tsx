import SectionHeader from '../ui/SectionHeader'

export default function ProcessSection() {
    const processes = [
        {
            title: 'Tell Me About Your Business',
            subtitle: "Let's talk about your business, your goals, and what you need from your website.",
            description: "We'll discuss your business, services, target customers, and what you want your website to accomplish."
        },
        {
            title: 'Design & Development',
            subtitle: "Your website starts taking shape.",
            description: "I'll design and build a modern, responsive website tailored to your business and brand."
        },
        {
            title: 'Review & Revisions',
            subtitle: "Make sure everything feels right.",
            description: "You'll have the opportunity to review the website and request revisions before it goes live."
        },
        {
            title: 'Launch',
            subtitle: "Your business is officially online",
            description: "Once everything is approved, I'll handle the launch and make sure your website is ready for customers."
        },
    ]
  return (
    <section id='process' className='py-20 px-6'>
        <div className="max-w-189 lg:max-w-300 mx-auto space-y-12 md:space-y-16">
            <SectionHeader title='Process' subtitle='Simple From Start to Finish'/>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative'>
                <div className='hidden lg:block absolute w-full h-0.5 bg-black top-12 -z-10'/>
                {processes.map((process, id) => (
                    <div key={id} className='bg-white flex flex-col p-6 rounded-2xl shadow-[12px_17px] border border-[#dfdfdf] hover:border-black duration-500 hover:scale-105'>
                        <p className='font-semibold text-black! text-lg mb-6'>0{id+1}</p>
                        <h2 className='text-[25px] font-bold leading-[120%] mb-4'>{process.title}</h2>
                        {/* <h3 className='text-sm text-black/70 mb-6'>{process.subtitle}</h3> */}
                        <p className='tracking-[-0.5px]'>{process.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
