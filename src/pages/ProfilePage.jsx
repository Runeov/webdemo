import { useParams, useLocation } from 'react-router-dom';

function ProfilePage({ onBack }) {
  const { id } = useParams();
  const { state } = useLocation();
  const employee = state?.employee;

  if (!employee || employee.id !== id) {
    return <div className="container mx-auto px-4 py-8">Profile not found</div>;
  }

  const officeInfo = {
    karasjok: { name: 'Karasjok', address: 'Hovedgata 15, 9730 Karasjok', icon: '🏔️' },
    oslo: { name: 'Oslo', address: 'Karl Johans gate 25, 0159 Oslo', icon: '🏙️' },
  };

  const currentOffice = officeInfo[employee.office] || { name: 'Unknown', address: 'N/A', icon: '📍' };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 @sm:px-6 @lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 flex items-center gap-2"
        >
          ← Tilbake til teamet
        </button>

        <div className="grid @lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="p-6 text-center">
                <div className="mb-6">
                  {employee.photo ? (
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-primary-500/10 flex items-center justify-center mb-4">
                      <span className="text-4xl text-primary-600">{employee.name.charAt(0)}</span>
                    </div>
                  )}
                  <h1 className="text-2xl font-semibold mb-2">{employee.name}</h1>
                  <p className="text-lg text-primary-600 mb-4">{employee.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <span className="bg-neutral-200 dark:bg-neutral-700 text-sm px-2 py-1 rounded-md flex items-center gap-1">
                      {currentOffice.icon} {currentOffice.name}
                    </span>
                  </div>
                </div>

                <hr className="mb-6 border-neutral-300 dark:border-neutral-600" />

                <div className="space-y-4">
                  <h3 className="font-medium text-sm uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                    Kontaktinformasjon
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${employee.email}`}
                      className="btn-primary w-full flex justify-start items-center gap-2"
                    >
                      📧 Send e-post
                    </a>
                    <a
                      href={`tel:${employee.phone}`}
                      className="btn-primary w-full flex justify-start items-center gap-2"
                    >
                      📞 Ring direkte
                    </a>
                  </div>
                  <div className="pt-4 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="mt-0.5">{currentOffice.icon}</span>
                      <div>
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">{currentOffice.name} kontor</p>
                        <p>{currentOffice.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      🕒 <span>Mon-Fri, 9:00-17:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="card">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Om {employee.name.split(' ')[0]}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{employee.description}</p>
              </div>
            </div>

            <div className="card bg-primary-500/5 border-primary-600/20">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">Har du spørsmål til {employee.name.split(' ')[0]}?</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Ta kontakt direkte for personlig rådgivning og hjelp med dine økonomiske behov.</p>
                <div className="flex flex-col @sm:flex-row gap-3 justify-center">
                  <a href={`mailto:${employee.email}`} className="btn-primary flex items-center gap-2">
                    📧 Send e-post
                  </a>
                  <a href={`tel:${employee.phone}`} className="btn-primary border border-neutral-300 dark:border-neutral-600 flex items-center gap-2">
                    📞 Ring nå
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;