export default function TerminalBlock() {
  return (
    <div className="w-full h-full bg-[#1e1e1e] p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
        </div>
        <span className="text-xs text-[#abb2bf] ml-2">terminal</span>
      </div>

      {/* Terminal Output */}
      {/* TODO: I want to make this interactive so you can actually scroll through the output */}

      <div className="flex-1 font-mono text-sm leading-relaxed">
        <div className="text-[#98c379] mb-2">
          <span className="text-[#61afef]">▶</span> <span className="text-[#e06c75]">magic_cli</span> <span className="text-[#98c379]">search</span> <span className="text-[#d19a66]">--query</span> <span className="text-[#d19a66]">&quot;privacy-focused local semantic search&quot;</span>
        </div>
        <div className="text-[#abb2bf] mb-1"></div>
        <div className="text-[#61afef] mb-2">
          <span className="text-[#abb2bf]">Found</span> <span className="text-[#d19a66]">5</span> <span className="text-[#abb2bf]">files and</span> <span className="text-[#d19a66]">42</span> <span className="text-[#abb2bf]">relevant chunks...</span>
        </div>
        <div className="text-[#abb2bf] mb-1"></div>
        <div className="text-[#ffd700] mb-2">
          🏆 <span className="text-[#61afef]">HIGHLIGHT</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#98c379]">📄</span> <span className="text-[#e06c75]">document.pdf</span> <span className="text-[#5c6370]">(95% match)</span>
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#5c6370]">&quot;Privacy-focused semantic search using local vector embeddings...&quot;</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#98c379]">📄</span> <span className="text-[#e06c75]">research.md</span> <span className="text-[#5c6370]">(87% match)</span>
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#5c6370]">&quot;Local document indexing with sub-50ms vector search...&quot;</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#98c379]">📄</span> <span className="text-[#e06c75]">notes.txt</span> <span className="text-[#5c6370]">(82% match)</span>
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#5c6370]">&quot;Faiss integration for efficient similarity search...&quot;</span>
        </div>
        <div className="text-[#abb2bf] mb-1"></div>
        <div className="text-[#61afef]">
          <span className="text-[#98c379]">⚡</span> <span className="text-[#abb2bf]">Search completed in</span> <span className="text-[#d19a66]">47ms</span>
        </div>
      </div>
    </div>
  )
}
