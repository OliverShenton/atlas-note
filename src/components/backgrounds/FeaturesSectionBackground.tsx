const FeaturesSectionBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-0 translate-x-1/2 z-0 bg-blue-500 w-150 h-150 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-0 right-0 z-0 bg-purple-500 w-150 h-150 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-0 left-0 z-0 bg-violet-500 w-150 h-150 rounded-full blur-3xl opacity-15" />
    </div>
  );
};

export default FeaturesSectionBackground;
