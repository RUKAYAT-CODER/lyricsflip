"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useGameStore } from "@/store/gameStore";
import { useState } from "react";
import DifficultySelect from "../game/DifficultySelect";

export function GameSetupForm({ onStart }) {
  const { setDifficulty, setUsername, selectedDifficulty, username } =
    useGameStore();
  // const [username, setLocalUsername] = useState("");

  const handleSubmit = () => {
    if (!username || !selectedDifficulty) return;

    setUsername(username);
    onStart();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2.5 items-start">
        <p className="text-base text-black font-medium -mb-1">
          Ready to show your lyrical prowess?🌚
        </p>
        <p className="text-[12px] text-[#666666]">
          Fill in the form below to continue
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2 flex flex-col items-start">
          <label
            htmlFor="username"
            className="text-sm font-medium text-[#212121]"
          >
            Username
          </label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-10 !border-2 !border-[#70E3C7]/30 hover:!border-[#70E3C7]/50 focus:!border-[#70E3C7] rounded-lg transition-colors duration-300 focus:ring-0 bg-white/90"
          />
        </div>

        <div className="space-y-2 flex flex-col items-start">
          <label htmlFor="genre" className="text-sm font-medium text-[#212121]">
            Genre
          </label>
          <div className="h-10 w-full">
            <Select>
              <SelectTrigger className="h-10 border-2 border-[#70E3C7]/30 hover:border-[#70E3C7]/50 focus:border-[#70E3C7] rounded-lg transition-colors duration-300 focus:ring-0 bg-white/90">
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent className="border-2 border-[#70E3C7]/20 rounded-lg bg-white/95 backdrop-blur-sm">
                <SelectItem 
                  value="pop"
                  className="rounded-[6px] transition-colors duration-200 hover:bg-transparent"
                >
                  Pop
                </SelectItem>
                <SelectItem value="rock">Rock</SelectItem>
                <SelectItem value="hip-hop">Hip Hop</SelectItem>
                <SelectItem value="jazz">Jazz</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2 flex flex-col items-start">
          <label
            htmlFor="difficulty"
            className="text-sm font-medium text-[#212121]"
          >
            Difficulty Level
          </label>
          <div className="border-2 border-[rgba(113,227,199,0.3)] hover:border-[rgba(113,227,199,0.5)] rounded-lg transition-colors duration-300 w-full">
            <DifficultySelect />
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <label
            htmlFor="duration"
            className="text-sm font-medium text-[#212121]"
          >
            Duration
          </label>
          <div className="h-10 w-full">
            <Select>
              <SelectTrigger className="h-10 border-2 border-[#70E3C7]/30 hover:border-[#70E3C7]/50 focus:border-[#70E3C7] rounded-lg transition-colors duration-300 focus:ring-0 bg-white/90">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="border-2 border-[#70E3C7]/20 rounded-lg bg-white/95 backdrop-blur-sm">
                <SelectItem value="5">5 minutes</SelectItem>
                <SelectItem value="10">10 minutes</SelectItem>
                <SelectItem value="15">15 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <label htmlFor="mode" className="text-sm font-medium text-[#212121]">
            Game Mode
          </label>
          <div className="h-10 w-full">
            <Select>
              <SelectTrigger className="h-10 border-2 border-[#70E3C7]/30 hover:border-[#70E3C7]/50 focus:border-[#70E3C7] rounded-lg transition-colors duration-300 focus:ring-0 bg-white/90">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="border-2 border-[#70E3C7]/20 rounded-lg bg-white/95 backdrop-blur-sm">
                <SelectItem value="single">Single Player</SelectItem>
                <SelectItem value="multi">Multiplayer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <label
            htmlFor="players"
            className="text-sm font-medium text-[#212121]"
          >
            Players
          </label>
          <div className="h-10 w-full">
            <Select>
              <SelectTrigger className="h-10 border-2 border-[#70E3C7]/30 hover:border-[#70E3C7]/50 focus:border-[#70E3C7] rounded-lg transition-colors duration-300 focus:ring-0 bg-white/90">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="border-2 border-[#70E3C7]/20 rounded-lg bg-white/95 backdrop-blur-sm">
                <SelectItem value="2">2 Players</SelectItem>
                <SelectItem value="3">3 Players</SelectItem>
                <SelectItem value="4">4 Players</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-[300px] mx-auto pt-4">
        <Button
          onClick={onStart}
          disabled={!username || !selectedDifficulty}
          className="w-full bg-[#70E3C7] py-7 text-md font-bold text-black hover:bg-[#70E3C7]/90 rounded-full disabled:opacity-50"
        >
          Start Game
        </Button>
      </div>
    </div>
  );
}
