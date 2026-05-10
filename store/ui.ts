import { create } from 'zustand';

interface UIState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  showServiceModal: boolean;
  setShowServiceModal: (show: boolean) => void;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  showProjectModal: boolean;
  setShowProjectModal: (show: boolean) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
}

export const useUI = create<UIState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  showServiceModal: false,
  setShowServiceModal: (show) => set({ showServiceModal: show }),
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
  showProjectModal: false,
  setShowProjectModal: (show) => set({ showProjectModal: show }),
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
