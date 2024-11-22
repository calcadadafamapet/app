import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <div>
          <Image
            src="/logo.png"
            alt="Calçada da Fama Pet"
            width={180}
            height={180}
            priority
          />
        </div>
        <div className="mt-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            Bem-vindo ao site da Calçada da Fama PET
          </h2>
          <p className="text-xl text-center text-yellow-400 font-bold">Garanta o lugar de seu PET na Calçada mais famosa do mundo!</p>
        </div>
      </div>

      <div className="my-12">

        <div className="title text-center">
          <h3 className="text-2xl font-bold">Localização: <span className="text-yellow-400">Calçada Principal</span></h3>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">1 PET</span></h3>
            <Link href="https://buy.stripe.com/bIYg0m81fcfL4EM001" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">2 PETS</span></h3>
            <Link href="https://buy.stripe.com/00g15s0yNgw19Z6aEG" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">3 PETS</span></h3>
            <Link href="https://buy.stripe.com/aEU5lIdlzcfL2wE14i" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">4 PETS</span></h3>
            <Link href="https://buy.stripe.com/3cs6pM0yN3Jfefm7sF" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">5 PETS</span></h3>
            <Link href="https://buy.stripe.com/aEU4hE95j93z1sAcN1" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
        </div>

      </div>

      <div className="my-12">

        <div className="title text-center">
          <h3 className="text-2xl font-bold">Localização: <span className="text-yellow-400">Garagem</span></h3>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">1 PET</span></h3>
            <Link href="https://buy.stripe.com/14kcOagxL3JfgnueV0" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">2 PETS</span></h3>
            <Link href="https://buy.stripe.com/cN2dSe6Xb3Jf5IQ5ks" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">3 PETS</span></h3>
            <Link href="https://buy.stripe.com/14k6pM3KZgw18V24gw" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">4 PETS</span></h3>
            <Link href="https://buy.stripe.com/14k01o0yNenTc7e14l" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
          <div className="flex-1 border border-solid border-white text-center p-8 rounded-xl m-6">
            <h3 className="pb-6">Registro de <span className="font-bold">5 PETS</span></h3>
            <Link href="https://buy.stripe.com/3cs15schv7Zvgnu6oG" className="p-4 border border-solid rounded-full hover:bg-yellow-400 hover:text-black">Pagar agora</Link>
          </div>
        </div>

      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-white text-black p-6 text-center font-bold">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://rixxer.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Rixxer Corp - Todos os Direitos Reservados.
        </a>
      </footer>

    </>

  );
}