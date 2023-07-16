import Image from 'next/image'
// import Nav from '@/components/Nav'
// import MuiNav from '@/components/MuiNav'
export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1 className="mt-12 text-5xl">30 Line Sport Fishing</h1>
        <div className="mt-10 mr-10 ml-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et
        </div>
        <div className="w-screen h-48 border flex justify-center">
          <Image
            width={500}
            height={500}
            src="/../public/assets/IMG_4591.jpeg"
            alt="company photo"
            className="object-cover h-48 w-96"
          ></Image>
        </div>
      </main>
    </div>
  );
}
