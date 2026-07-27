import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "closed-sidebar-by-default",

  initialize() {
    withPluginApi("0.8", (api) => {
      const currentUser = api.getCurrentUser();
      if (!currentUser) {
        const applicationController = api.container.lookup("controller:application");
        applicationController.set("showSidebar", false);
      }
    });
  },
};
