const Settings = {
  KARAF_WEBAPP: '/cxf',
  REST_MOUNT_POINT: '/rest/core/',
  ERROR_TOLERANCE: 3
};

Settings.REST_URL = Settings.KARAF_WEBAPP + Settings.REST_MOUNT_POINT;

export default Settings;
