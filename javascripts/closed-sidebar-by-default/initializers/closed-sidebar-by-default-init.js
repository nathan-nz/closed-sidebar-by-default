import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "closed-sidebar-by-default",

  initialize() {
    withPluginApi("0.8", (api) => {
      if (settings.user_in_closed_sidebar_groups) {
        const applicationController = api.container.lookup("controller:application");
        applicationController.set("showSidebar", false);
      }
    });
  },
};
