import Pet from "./Pet";

const Results = ({ pets }) => {
   return (
      <div className="search">
         {!pets.length ? (
            <h2>No Pets Found</h2>
         ) : (
            pets.map((pet) => (
               <Pet
                  animal={pet.animal}
                  key={pet.id}
                  name={pet.name}
                  breed={pet.breed}
                  images={pet.images}
                  location={`${pet.city}, ${pet.state}`}
                  id={pet.id}
               />
               // Do not use {...pet} as it will be hard to know what it expects to use
            ))
         )}
      </div>
   );
};

export default Results;
