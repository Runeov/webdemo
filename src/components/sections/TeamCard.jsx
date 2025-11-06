import { Link } from 'react-router-dom';
import SafeImage from '../SafeImage.jsx';

function TeamCard({ id, name, role, email, phone, photo, description, office, experience, specialties, education, languages, workingHours, achievements, clientTypes }) {
  // Prepare employee data to pass to ProfilePage
  const employeeData = {
    id,
    name,
    role,
    email,
    phone,
    photo,
    description,
    office,
    experience,
    specialties,
    education,
    languages,
    workingHours,
    achievements,
    clientTypes,
  };

  return (
    <div className="card card-hover fade-in">
      <div className="p-6 text-center">
        <div className="mb-4">
          <SafeImage
            src={photo}
            alt={`${name} - ${role}`}
            fallback="/images/placeholder.svg"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>
        
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-primary-600 mb-3">{role}</p>
        
        {description && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="space-y-2">
          <Link
            to={`/profile/${id}`}
            state={{ employee: employeeData }}
            className="btn-primary w-full flex items-center justify-center gap-2 mb-2"
          >
            👤 Se profil
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`mailto:${email}`}
              className="btn-primary flex items-center justify-center gap-2"
            >
              📧 E-post
            </a>
            <a
              href={`tel:${phone}`}
              className="btn-primary flex items-center justify-center gap-2"
            >
              📞 Ring
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;