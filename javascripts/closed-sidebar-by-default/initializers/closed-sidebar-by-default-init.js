import { apiInitializer } from "discourse/lib/api";

const HIDE_SIDEBAR_KEY = "sidebar-hidden";
const INITIALIZED_KEY = "closed-sidebar-by-default-initialized";

export default apiInitializer("1.8.0", (api) => {
  const keyValueStore = api.container.lookup("service:key-value-store");
  const userGroups = settings.user_in_closed_sidebar_groups;

  if (userGroups) {
    if (!keyValueStore.getItem(INITIALIZED_KEY)) {
      keyValueStore.setItem(HIDE_SIDEBAR_KEY, "true");
      keyValueStore.setItem(INITIALIZED_KEY, "true");
    }
  } else {
    if (keyValueStore.getItem(INITIALIZED_KEY)) {
      keyValueStore.removeItem(HIDE_SIDEBAR_KEY);
      keyValueStore.removeItem(INITIALIZED_KEY);
    }
  }
});
