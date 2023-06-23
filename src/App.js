import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Santri from "./pages/Santri";
import AddSantri from "./pages/AddSantri";
import EditSantri from "./pages/EditSantri";
import Profile from "./pages/Profile";
import Kamar from "./pages/Kamar";
import AddKamar from "./pages/AddKamar";
import EditKamar from "./pages/EditKamar";
import Kelas from "./pages/Kelas";
import AddKelas from "./pages/AddKelas";
import EditKelas from "./pages/EditKelas";
import Ustadz from "./pages/Ustadz";
import AddUstadz from "./pages/AddUstadz";
import EditUstadz from "./pages/EditUstadz";
import Jadwal from "./pages/Jadwal";
import AddJadwal from "./pages/AddJadwal";
import EditJadwal from "./pages/EditJadwal";
import Nilai from "./pages/Nilai";
import NilaiSantri from "./pages/NilaiSantri";
import Pelajaran from "./pages/Pelajaran";
import AddPelajaran from "./pages/AddPelajaran";
import EditPelajaran from "./pages/EditPelajaran";
import KelasDetail from "./pages/KelasDetail";
import SantriDetail from "./pages/SantriDetail";
import NilaiDetail from "./pages/NilaiDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="santri" element={<Santri />} />
          <Route path="santri/add" element={<AddSantri />} />
          <Route path="santri/edit/:id" element={<EditSantri />} />
          <Route path="santri/detail/:id" element={<SantriDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="/kamar" element={<Kamar />} />
          <Route path="/kamar/add" element={<AddKamar />} />
          <Route path="/kamar/edit/:id" element={<EditKamar />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/kelas/add" element={<AddKelas/>} />
          <Route path="/kelas/edit/:id" element={<EditKelas/>} />
          <Route path="/ustadz" element={<Ustadz />} />
          <Route path="/ustadz/add" element={<AddUstadz />} />
          <Route path="/ustadz/edit/:id" element={<EditUstadz />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/jadwal/add" element={<AddJadwal />} />
          <Route path="/jadwal/edit/:id" element={<EditJadwal />} />
          {/* <Route path="/nilai" element={<Nilai />} /> */}
          <Route path="/pelajaran" element={<Pelajaran />} />
          <Route path="/pelajaran/add" element={<AddPelajaran />} />
          <Route path="/pelajaran/edit/:id" element={<EditPelajaran />} />
          <Route path="/nilai" element={<Nilai />} />
          <Route path="/nilai/detail/:id" element={<NilaiDetail />} />
          <Route path="/nilai/santri/:id" element={<NilaiSantri />} />
          <Route path="/kelas/detail" element={<KelasDetail />} />
          {/* <Route path="/kelasdetail/:namaKitab" element={<KelasDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;