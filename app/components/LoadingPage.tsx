const LoadingPage = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
            <div className="relative w-32 h-32 flex items-center justify-center">

                <div className="w-5 h-5 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 flex items-center justify-center border border-blue-400/50 italic font-serif text-sm text-white/90 animate-pulse">
                    H
                </div>

                <div className="absolute w-full h-full border-2 border-white/10 rounded-full rotate-[60deg]">
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_15px_#fff] animate-orbit" />
                </div>
            </div>

        </div>
    );
};

export default LoadingPage;