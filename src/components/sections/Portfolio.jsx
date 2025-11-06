import { useState } from 'react';

const cardData = [
  {
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format&q=80',
    title: 'Rhododendron Blomstring',
    desc: 'Våre rhododendron planter blomstrer med praktfulle farger fra tidlig vår til sen høst. Hver sort har sin unike blomstringsperiode og fargepalett.',
    delay: '0s'
  },
  {
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&auto=format&q=80',
    title: 'Hardføre Varianter',
    desc: 'Spesielt utvalgte sorter som tåler norsk klima perfekt. Våre planter er herdede og tilpasset lokale værforhold gjennom flere årstider.',
    delay: '0.1s'
  },
  {
    img: 'https://images.unsplash.com/photo-1462524500090-89443873e2b4?w=400&h=300&fit=crop&auto=format&q=80',
    title: 'Hageintegrasjon',
    desc: 'Rhododendron passer perfekt inn i norske hager og landskap. Vi hjelper deg med å velge riktige sorter for din hagetype og størrelse.',
    delay: '0.2s'
  },
  {
    img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop&auto=format&q=80',
    title: 'Pleie og Vedlikehold',
    desc: 'Enkle pleietips og råd for å sikre sunn vekst og rikelig blomstring år etter år. Våre eksperter deler sin kunnskap for best resultat.',
    delay: '0.3s'
  },
];

function Portfolio() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Våre Rhododendron Kategorier</h2>
      <div className="overflow-x-auto">
        <div className="flex flex-col @sm:flex-row gap-6 min-w-fit px-2">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="card bg-base-100 w-full min-w-80 shadow-sm fade-in cursor-pointer hover:shadow-lg transition-shadow"
            style={{ transitionDelay: card.delay }}
            onClick={() => openModal(card)}
          >
            <figure className="px-4 pt-4">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{card.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Lær Mer</button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 fade-in" onClick={closeModal}>
          <div
            className="bg-white dark:bg-neutral-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="card bg-base-100">
              <figure className="px-6 pt-6">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.title}
                  className="rounded-xl w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body p-8">
                <h2 className="card-title text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                  {selectedCard.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {selectedCard.desc}
                </p>

                {/* Additional detailed content based on category */}
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                  {selectedCard.title === 'Rhododendron Blomstring' && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Blomstringsdetaljer</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Våre rhododendron blomstrer i et spektrum av farger inkludert rosa, rød, lilla, hvit og gul.
                        Blomstringsperioden varierer fra tidlig vår til sen høst avhengig av sorten.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Se Blomstrende Sorter</button>
                      </div>
                    </div>
                  )}
                  {selectedCard.title === 'Hardføre Varianter' && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Klimatilpasning</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Alle våre sorter er nøye utvalgt for å tåle norske værforhold, inkludert frost, snø og varierende sommertemperaturer.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Utforsk Hardføre Sorter</button>
                      </div>
                    </div>
                  )}
                  {selectedCard.title === 'Hageintegrasjon' && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Design Tips</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Rhododendron fungerer perfekt som solitærplanter, i grupper eller som hekk. Vi hjelper deg med å velge optimale plasseringer.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Få Design Hjelp</button>
                      </div>
                    </div>
                  )}
                  {selectedCard.title === 'Pleie og Vedlikehold' && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Ekspert Råd</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Med riktig pleie vil dine rhododendron blomstre rikt år etter år. Vi deler våre beste tips for vanning, gjødsling og beskjæring.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Last Ned Pleieguide</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;