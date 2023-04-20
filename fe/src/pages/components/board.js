import Link from "next/link";
import AddBoard from "./addBoard";
import useBoardStore from "/store/board";
import { useEffect } from "react";

export default function Board() {
  const {board, getBoardList} = useBoardStore();

  useEffect(()=>{
    getBoardList();
  }, [])
  return (
    <div>
        <h2 className="text-xl font-bold mb-8">Boards</h2>

        <div className="grid grid-cols-3 gap-5 text-black">
          {board.map((p)=>(
            <a
              key={p.id}
              className="p-5 border border-b-gray-400 rounded-lg">
              <h3>{p.title}</h3>
              <small className="text-gray-500 text-sm">
                {p.description}
              </small>
            </a>
          ))}
        </div>
    </div>
  );
}
