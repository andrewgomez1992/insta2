import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import instagram from "../../assets/instagram.png";
import Image from "next/image";

// Browser ..
const signIn = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen 
      py-2 -mt-56 px-14 text-center">
        <Image src={instagram} alt="" width="380px" height="180px" />
        <p className="font-xs italic">
            This is not a REAL app, it is built for educational
            purposes only
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Server side ..
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
