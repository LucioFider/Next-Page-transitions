import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "../animation";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-96 p-1">
          <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
            Happy Pickle
          </h1>
        </div>
        <div className="flex justify-between">
          <motion.div
            className=""
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 variants={item}>Design</motion.h2>
            <motion.h2 variants={item}>Company</motion.h2>
            <motion.h2 variants={item}>2022</motion.h2>
          </motion.div>

          <motion.div
            className=""
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h3 variants={item}>
              This pickle gonna make you smile.
            </motion.h3>
            <motion.h3 variants={item}>
              Scottish designs to make you happy.
            </motion.h3>
            <motion.h3 variants={item}>
              Click contact for cool transitions.
            </motion.h3>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
