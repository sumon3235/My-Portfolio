const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50">
      
      {/* LOADING text */}
      <p className="text-[#00d4ff] text-2xl md:text-3xl tracking-[0.5em] font-light animate-pulse">
        LOADING
      </p>

      {/* Animated line */}
      <div className="mt-4 w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden">
        <div className="h-full w-1/2 bg-[#00d4ff] animate-slide" />
      </div>

    </div>
  );
};

export default Preloader;