import Image from 'next/image';

export default function About() {
  return (
    <section className="w-screen mt-12 ">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl">Activities</h5>
        <p className="text-2xl uppercase font-light">
          EduHub Institute Of Technology
        </p>
        <p className="w-3/5 text-center text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          ipsa expedita laboriosam aspernatur dolore omnis corrupti, commodi
          corporis dolorum eius id consequuntur quisquam odio? Similique
          quibusdam vitae maiores odit magni!
        </p>
        <div className="flex justify-center items-center gap-6">
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg"
            alt="img"
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400313_960_720.jpg"
            alt="img"
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2016/03/26/17/45/teacher-1280966_960_720.jpg"
            alt="img"
          />
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md">
          View More{' '}
        </button>
      </div>
    </section>
  );
}
