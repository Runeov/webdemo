import TeamCard from './TeamCard.jsx';

const teamData = [
  {
    id: 'anna-jensen',
    name: 'Anna Jensen',
    role: 'Lead UX Designer',
    email: 'anna@webdevco.com',
    phone: '+1 (555) 123-4567',
    office: 'oslo',
    description: 'Anna crafts intuitive, user-centered interfaces with a focus on accessibility and modern design principles.',
    experience: '8+ years',
    specialties: ['UX/UI Design', 'Accessibility', 'Design Systems'],
    education: ['MSc in Interaction Design, University of Oslo', 'Certified UX Designer, Nielsen Norman Group'],
    languages: ['Norwegian', 'English', 'Swedish'],
    workingHours: 'Mon-Fri, 9:00-17:00',
    achievements: ['Awwwards Site of the Month, 2024', 'UX Design Award, 2023'],
    clientTypes: ['Startups', 'Enterprises', 'Non-Profits'],
    photo: 'https://source.unsplash.com/200x200/?portrait,woman',
  },
  {
    id: 'mark-olsen',
    name: 'Mark Olsen',
    role: 'Senior React Developer',
    email: 'mark@webdevco.com',
    phone: '+1 (555) 234-5678',
    office: 'karasjok',
    description: 'Mark specializes in building scalable React applications with a focus on performance optimization.',
    experience: '6+ years',
    specialties: ['React', 'TypeScript', 'Performance Optimization'],
    education: ['BSc in Computer Science, NTNU'],
    languages: ['Norwegian', 'English'],
    workingHours: 'Mon-Fri, 8:00-16:00',
    achievements: ['React Conf Speaker, 2024'],
    clientTypes: ['Tech Companies', 'SMEs'],
    photo: 'https://source.unsplash.com/200x200/?portrait,man',
  },
  {
    id: 'lisa-chen',
    name: 'Lisa Chen',
    role: 'Frontend Engineer',
    email: 'lisa@webdevco.com',
    phone: '+1 (555) 345-6789',
    office: 'oslo',
    description: 'Lisa is passionate about Tailwind CSS v4 and creating responsive, visually stunning web applications.',
    experience: '4+ years',
    specialties: ['Tailwind CSS', 'Responsive Design', 'Animation'],
    education: ['BSc in Software Engineering, University of Bergen'],
    languages: ['English', 'Norwegian', 'Mandarin'],
    workingHours: 'Mon-Fri, 10:00-18:00',
    achievements: [],
    clientTypes: ['E-Commerce', 'Creative Agencies'],
  },
];

function Team() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Our Team</h2>
      <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;