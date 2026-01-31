const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-4 px-3 py-2 rounded cursor-pointer hover:bg-gray-200 transition">
      <span className="text-gray-700">{icon}</span>
      <span className="text-sm text-black">{label}</span>
    </div>
  );
};

export default SidebarItem;
