const galleryImages = [
  { src: '/images/gallery/01-bighorn-sheep.avif', alt: 'Big Horned Sheep Light Sculpture' },
  { src: '/images/gallery/02-prohibition.avif', alt: 'Prohibition Bar Lights' },
  { src: '/images/gallery/03-tops-diner.avif', alt: 'Tops Diner Holiday Lights' },
  { src: '/images/gallery/04-dealership-lobby.avif', alt: 'Auto Dealership Lobby' },
  { src: '/images/gallery/05-ceiling-lights.avif', alt: 'Ceiling Light Installation' },
  { src: '/images/gallery/06-stairway.avif', alt: 'Stairway Light Design' },
  { src: '/images/gallery/07-barca.avif', alt: 'Barca Restaurant Holiday Decor' },
  { src: '/images/gallery/08-light-trees.avif', alt: 'Illuminated Trees Festival' },
  { src: '/images/gallery/09-park-city-snowflake.avif', alt: 'Park City Snowflake Sculpture' },
  { src: '/images/gallery/10-moose.avif', alt: 'Moose Light Sculptures' },
  { src: '/images/gallery/11-hotel-lobby.avif', alt: 'Hotel Lobby Christmas Decor' },
  { src: '/images/gallery/12-purple-snowflakes.avif', alt: 'Purple Snowflake Ceiling' },
];

export function BriteGallery() {
  return (
    <section className="w-full bg-black px-2.5 py-[30px]">
      <div className="grid grid-cols-3 gap-2.5">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative aspect-[4/3] overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-in-out hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
