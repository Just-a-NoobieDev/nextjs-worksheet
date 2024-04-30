"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function Activity6() {
  const [pokemon, setPokemon] = useState([] as any);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    const fetchPokeData = async (url: string) => {
      await fetch(url)
        .then((response) => response.json())
        .then(function (pokeData) {
          setPokemon((pokemon: any) => [...pokemon, pokeData]);
        });
    };

    const fetchPokemon = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => response.json())
        .then(function (pokeData) {
          setNext(pokeData.next);
          setPrev(pokeData.previous);
          pokeData.results.forEach((pokemon: any) => {
            fetchPokeData(pokemon.url);
          });
        });
    };

    fetchPokemon();
  }, []);

  const filterDuplicates = (array: any) => {
    return array.filter(
      (v: any, i: any, a: any) => a.findIndex((t: any) => t.id === v.id) === i
    );
  };

  const handleNext = async () => {
    setPokemon([]);
    await fetch(next)
      .then((response) => response.json())
      .then(function (pokeData) {
        setNext(pokeData.next);
        setPrev(pokeData.previous);
        pokeData.results.forEach((pokemon: any) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then(function (pokeData) {
              setPokemon((pokemon: any) => [...pokemon, pokeData]);
            });
        });
      });
  };

  const handlePrev = async () => {
    setPokemon([]);
    await fetch(prev)
      .then((response) => response.json())
      .then(function (pokeData) {
        setNext(pokeData.next);
        setPrev(pokeData.previous);
        pokeData.results.forEach((pokemon: any) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then(function (pokeData) {
              setPokemon((pokemon: any) => [...pokemon, pokeData]);
            });
        });
      });
  };

  return (
    <>
      <NavBar isActivity6 />
      <main className="flex min-h-screen flex-col items-center bg-slate-900">
        <h1 className="text-4xl font-bold text-white p-4">Pokemon</h1>
        <div className="flex gap-4">
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
              !prev && "opacity-50"
            }`}
            onClick={handlePrev}
            disabled={!prev}
          >
            Prev
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
              !next && "opacity-50"
            }`}
            onClick={handleNext}
            disabled={!next}
          >
            Next
          </button>
        </div>
        <div className="flex flex-wrap gap-4 w-full p-10 items-center justify-center">
          {pokemon
            ? filterDuplicates(pokemon).map((poke: any, index: any) => (
                <div
                  className="w-[500px] bg-slate-200 rounded-2xl flex flex-col items-center justify-center"
                  key={index}
                >
                  <Image
                    src={poke.sprites.front_default}
                    alt="logo"
                    width={150}
                    height={150}
                    priority
                    className="bg-slate-300 h-[300px] w-full object-contain rounded-se-2xl rounded-ss-2xl"
                  />
                  <small>Pokemon Id: {poke.id}</small>
                  <h1 className="text-2xl font-bold">
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </h1>
                  <p className="text-lg">
                    {poke.types.map((type: any) => type.type.name).join(", ")}
                  </p>
                  <div className="abilities">
                    <span className="text-md font-medium">Abilities: </span>
                    <span className="text-md font-medium">
                      {poke.abilities
                        .map((ability: any) => ability.ability.name)
                        .join(", ")}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-lg font-bold">HP: </span>
                    <span className="text-lg font-bold text-red-500">
                      {
                        poke.stats.find((stat: any) => stat.stat.name === "hp")
                          .base_stat
                      }
                    </span>
                  </div>
                  <div className="">
                    <span className="text-lg font-bold">Attack: </span>
                    <span className="text-lg font-bold text-blue-500">
                      {
                        poke.stats.find(
                          (stat: any) => stat.stat.name === "attack"
                        ).base_stat
                      }
                    </span>
                  </div>
                  <div className="mb-5">
                    <span className="text-lg font-bold">Defense: </span>
                    <span className="text-lg font-bold text-gray-500">
                      {
                        poke.stats.find(
                          (stat: any) => stat.stat.name === "defense"
                        ).base_stat
                      }
                    </span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </main>
    </>
  );
}
