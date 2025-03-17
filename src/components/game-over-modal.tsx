"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Player } from "@/types/player"

interface GameOverModalProps {
  winner: Player
  onRestart: () => void
  onSettings: () => void
}

const GameOverModal: React.FC<GameOverModalProps> = ({ winner, onRestart, onSettings }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-card rounded-lg shadow-xl max-w-md w-full p-6 bg-amber-100"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"
          >
            <Trophy className="h-10 w-10 text-yellow-500" />
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Game Over!
          </motion.h2>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg">
              <span className="font-bold">{winner.name}</span> wins the game!
            </p>
            <p className="text-sm text-muted-foreground mt-1">Congratulations on your victory!</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={onRestart} className="flex-1">
              Play Again
            </Button>
            <Button onClick={onSettings} variant="outline" className="flex-1">
              Change Settings
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default GameOverModal