/**
 * FINDLY - DEVICE TRACKING & ASSET MANAGEMENT CONSOLE
 * Real-time GPS device monitoring, hardware inventory, customer logs, and security controls.
 */

(function () {
  // --- Landmark Waypoints around Hyderabad, Telangana, India ---
  const TRIP_WAYPOINTS = {
    "trip-1": [
      [17.4483, 78.3741], // HITEC City Mall
      [17.4485, 78.3911], // Madhapur Metro
      [17.4265, 78.4082], // Jubilee Hills Road
      [17.4124, 78.4320], // Banjara Hills Rd 12
      [17.4258, 78.4503], // Panjagutta Junction
      [17.4430, 78.4635], // Begumpet Airport
      [17.4347, 78.5016]  // Secunderabad Junction
    ],
    "trip-2": [
      [17.4401, 78.3489], // Gachibowli Stadium
      [17.4162, 78.3410], // Financial District Hub
      [17.3910, 78.3621], // Narsingi ORR
      [17.3854, 78.3289], // Kokapet Lake
      [17.3190, 78.4020], // Rajendranagar Area
      [17.2650, 78.4230], // Shamshabad Toll Gate
      [17.2405, 78.4294]  // RGIA Airport
    ],
    "trip-3": [
      [17.4439, 78.4975], // Secunderabad Clock Tower
      [17.4190, 78.4950], // Mushirabad Market
      [17.3850, 78.4830], // Koti Commercial Hub
      [17.3616, 78.4747], // Charminar Monument
      [17.3520, 78.4520], // Bahadurpura Zoo
      [17.3888, 78.4682]  // Nampally Station
    ],
    "trip-4": [
      [17.4938, 78.3914], // JNTU Kukatpally
      [17.4720, 78.4200], // Moosapet Metro
      [17.4560, 78.4290], // Erragadda Hospital
      [17.4374, 78.4482], // Ameerpet Crossing
      [17.4130, 78.4610], // Khairatabad Flyover
      [17.4235, 78.4760]  // Necklace Road Lakefront
    ],
    "trip-5": [
      [17.3984, 78.5520], // Uppal Ring Road
      [17.3880, 78.5150], // Amberpet Flyover
      [17.3820, 78.4910], // Koti Junction
      [17.3688, 78.5247], // Dilsukhnagar Bus Station
      [17.3458, 78.5482]  // LB Nagar Crossing
    ]
  };

  // --- Devices/Assets Metadata (Customers, Devices, Names) ---
  const DEVICES_METADATA = {
    "trip-1": {
      name: "Projector P15",
      id: "DEV-0001",
      serialNumber: "SN-0001",
      category: "Audio/Visual",
      status: "assigned",
      purchaseDate: "2024-11-05",
      rentalDate: "2026-05-10",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2024-11-05 by Findly Assets.",
      rentalHistory: "Leased to Devon Lane for HITEC Tech Conference 2026.",
      locationNames: ["HITEC City Mall", "Madhapur Metro", "Jubilee Hills Road", "Banjara Hills Rd 12", "Panjagutta Junction", "Begumpet Airport", "Secunderabad Junction"],
      customer: {
        customerId: "CUST-0001",
        name: "Devon Lane",
        phone: "+91 98480 22338",
        email: "devon.lane@outlook.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
      },
      activityLogs: [
        "Dispatched from HITEC City Warehouse on 2026-05-10.",
        "Checked by Secunderabad manager on 2026-06-15.",
        "GPS signal acquired on 2026-06-17."
      ]
    },
    "trip-2": {
      name: "Laptop L22",
      id: "DEV-0002",
      serialNumber: "SN-0002",
      category: "Electronics",
      status: "rented",
      purchaseDate: "2025-03-12",
      rentalDate: "2026-06-01",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2025-03-12.",
      rentalHistory: "Leased to Cyberdyne Systems Financial District.",
      locationNames: ["Gachibowli Stadium", "Financial District Hub", "Narsingi ORR", "Kokapet Lake", "Rajendranagar Area", "Shamshabad Toll Gate", "RGIA Airport"],
      customer: {
        customerId: "CUST-0002",
        name: "Sarah Connor",
        phone: "+91 81234 56789",
        email: "s.connor@cyberdyne.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
      },
      activityLogs: [
        "Registered in inventory on 2025-03-12.",
        "Assigned to Sarah Connor at Gachibowli Hub on 2026-06-01.",
        "Telemetry ping active near RGIA Airport."
      ]
    },
    "trip-3": {
      name: "Smart Lamp A01",
      id: "DEV-0003",
      serialNumber: "SN-0003",
      category: "Lighting",
      status: "maintenance",
      purchaseDate: "2025-01-20",
      rentalDate: "2026-04-15",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2025-01-20.",
      rentalHistory: "Rented to Marcus Wright.",
      locationNames: ["Secunderabad Clock Tower", "Mushirabad Market", "Koti Commercial Hub", "Charminar Monument", "Bahadurpura Zoo", "Nampally Station"],
      customer: {
        customerId: "CUST-0003",
        name: "Marcus Wright",
        phone: "+91 78930 11223",
        email: "m.wright@resistance.net",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
      },
      activityLogs: [
        "Inspection completed at Secunderabad office on 2025-01-21.",
        "Rented on 2026-04-15.",
        "Delivered to holder near Nampally Station."
      ]
    },
    "trip-4": {
      name: "GPS Tracker G08",
      id: "DEV-0004",
      serialNumber: "SN-0004",
      category: "Equipment",
      status: "missing",
      purchaseDate: "2024-05-18",
      rentalDate: "2026-02-12",
      warrantyStatus: "Expired",
      purchaseHistory: "Purchased on 2024-05-18.",
      rentalHistory: "Assigned to Hyderabad Survey Team.",
      locationNames: ["JNTU Kukatpally", "Moosapet Metro", "Erragadda Hospital", "Ameerpet Crossing", "Khairatabad Flyover", "Necklace Road Lakefront"],
      customer: {
        customerId: "CUST-0004",
        name: "Lisa Simpson",
        phone: "+91 90001 20002",
        email: "lisa.s@springfield.org",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
      },
      activityLogs: [
        "Acquired on 2024-05-18.",
        "Dispatched from Kukatpally site on 2026-02-12.",
        "Signal lost near Necklace Road Lakefront."
      ]
    },
    "trip-5": {
      name: "DSLR Camera C05",
      id: "DEV-0005",
      serialNumber: "SN-0005",
      category: "Photography",
      status: "available",
      purchaseDate: "2025-05-30",
      rentalDate: null,
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2025-05-30.",
      rentalHistory: "Returned by Robert Chen on 2026-06-12.",
      locationNames: ["Uppal Ring Road", "Amberpet Flyover", "Koti Junction", "Dilsukhnagar Bus Station", "LB Nagar Crossing"],
      customer: null,
      activityLogs: [
        "Camera cleaning completed at Uppal office on 2026-06-12.",
        "Inspected and flagged Available at LB Nagar branch."
      ]
    }
  };

  // --- Interpolate Route Path helper ---
  function interpolateCoordinates(waypoints, segmentsPerLeg = 25) {
    const interpolated = [];
    for (let i = 0; i < waypoints.length - 1; i++) {
      const start = waypoints[i];
      const end = waypoints[i + 1];
      for (let j = 0; j < segmentsPerLeg; j++) {
        const fraction = j / segmentsPerLeg;
        const lat = start[0] + (end[0] - start[0]) * fraction;
        const lng = start[1] + (end[1] - start[1]) * fraction;
        interpolated.push([lat, lng]);
      }
    }
    interpolated.push(waypoints[waypoints.length - 1]);
    return interpolated;
  }

  // --- Precompute interpolated coordinates for all trips ---
  const INTERPOLATED_TRIPS = {};
  Object.keys(TRIP_WAYPOINTS).forEach(tripId => {
    INTERPOLATED_TRIPS[tripId] = interpolateCoordinates(TRIP_WAYPOINTS[tripId], 25);
  });

  // --- Application State ---
  const state = {
    isLoggedIn: false,
    activeTab: "live-tracking",
    activeTripId: null, // no tracking by default
    isTrackingActive: false,
    theme: "theme-dark",
    isPaused: false,
    speedMultiplier: 2,
    lockMap: true,
    
    // Connection Monitoring
    lastUpdateReceivedTime: null,
    connectionStatus: "offline",
    
    // Search & Filter
    searchQuery: "",
    statusFilter: "all",
    selectedCustomerEmail: null,

    // Independent Device Telemetries States
    trips: {
      "trip-1": { currentStepIndex: 0, elapsedSeconds: 0, battery: 95, status: "assigned", locationName: "Determining...", connectionStatus: "online", lastPingTime: Date.now(), lastOnlineTimestamp: new Date().toLocaleTimeString() },
      "trip-2": { currentStepIndex: 0, elapsedSeconds: 0, battery: 88, status: "rented", locationName: "Determining...", connectionStatus: "online", lastPingTime: Date.now(), lastOnlineTimestamp: new Date().toLocaleTimeString() },
      "trip-3": { currentStepIndex: 0, elapsedSeconds: 0, battery: 32, status: "maintenance", locationName: "Determining...", connectionStatus: "offline", lastPingTime: Date.now() - 30000, lastOnlineTimestamp: "N/A" },
      "trip-4": { currentStepIndex: 0, elapsedSeconds: 0, battery: 18, status: "missing", locationName: "Determining...", connectionStatus: "offline", lastPingTime: Date.now() - 30000, lastOnlineTimestamp: "N/A" },
      "trip-5": { currentStepIndex: 0, elapsedSeconds: 0, battery: 100, status: "available", locationName: "Determining...", connectionStatus: "online", lastPingTime: Date.now(), lastOnlineTimestamp: new Date().toLocaleTimeString() }
    },
    
    lastPingSecondsAgo: 0,
    
    // Telemetry, Reports and Maintenance Log Arrays
    telemetryLogs: [],
    reportsHistory: [
      { dateTime: "2026-06-14 18:24", txId: "TX-9021", deviceName: "Laptop L22", holder: "Devon Lane", email: "devon.lane@outlook.com", duration: "12 Months", warranty: "Active", status: "Returned", badgeClass: "available", type: "return" },
      { dateTime: "2026-06-14 14:10", txId: "TX-8841", deviceName: "Projector P15", holder: "Sarah Connor", email: "s.connor@cyberdyne.com", duration: "3 Months", warranty: "Active", status: "Returned", badgeClass: "available", type: "return" },
      { dateTime: "2026-06-13 22:05", txId: "TX-7491", deviceName: "Smart Lamp A01", holder: "Marcus Wright", email: "m.wright@resistance.net", duration: "6 Months", warranty: "Active", status: "Assigned", badgeClass: "assigned", type: "assignment" },
      { dateTime: "2026-06-12 11:15", txId: "TX-6804", deviceName: "GPS Tracker G08", holder: "Lisa Simpson", email: "lisa.s@springfield.org", duration: "12 Months", warranty: "Expired", status: "Missing", badgeClass: "missing", type: "security" }
    ],
    maintenanceHistory: [
      { dateResolved: "2026-06-12 14:30", deviceId: "DEV-0005", serialNumber: "SN-0005", issue: "Lens Shutter Jammed", repairer: "Camera Clinic", location: "LB Nagar Branch", status: "REPAIRED" }
    ]
  };

  // --- Mapping Instances ---
  let mapInstance = null;
  let tileLayer = null;
  let carMarker = null;
  let pickupMarker = null;
  let destMarker = null;
  
  // Custom styled Polylines
  let polylineTraversed = null;
  let polylineRemaining = null;
  
  // Fleet overview marker group
  let fleetMarkersGroup = null;

  // Simulation Clock Loop
  let simulationInterval = null;

  // --- DOM Selectors ---
  let DOM = {};

  function loadDOMReferences() {
    DOM = {
      // Connection Status & Banner
      connectionStatus: document.getElementById("connection-status"),
      connectionStatusText: document.getElementById("connection-status-text"),
      gpsOfflineBanner: document.getElementById("gps-offline-banner"),

      // Auth Containers
      loginContainer: document.getElementById("login-container"),
      appContainer: document.getElementById("app-container"),
      
      // Login Inputs
      loginForm: document.getElementById("login-form"),
      loginUsername: document.getElementById("login-username"),
      loginPassword: document.getElementById("login-password"),
      passwordToggle: document.getElementById("password-toggle"),
      loginErrorMsg: document.getElementById("login-error-msg"),
      errorText: document.getElementById("error-text"),
      btnLoginSubmit: document.getElementById("btn-login-submit"),
      btnLoginText: document.getElementById("btn-login-text"),
      loginSpinner: document.getElementById("login-spinner"),
      
      // Header controls
      themeToggleLogin: document.getElementById("theme-toggle"),
      themeToggleApp: document.getElementById("theme-toggle-app"),
      mobileThemeToggle: document.getElementById("mobile-theme-toggle"),
      headerStatusPill: document.getElementById("header-status-pill"),
      headerTripStatus: document.getElementById("header-trip-status"),
      viewTitle: document.getElementById("view-title"),
      btnLogout: document.getElementById("btn-logout"),
      
      // Dual-state Telemetry Panels
      floatingFleetPanel: document.getElementById("floating-fleet-panel"),
      floatingTelemetryPanel: document.getElementById("floating-telemetry-panel"),
      btnToggleFleetPanel: document.getElementById("btn-toggle-fleet-panel"),
      fleetSearch: document.getElementById("fleet-search"),
      fleetListContainer: document.getElementById("fleet-list-container"),
      backToFleetBtn: document.getElementById("back-to-fleet-btn"),
      btnToggleChat: document.getElementById("btn-toggle-chat"),
      btnCloseChat: document.getElementById("btn-close-chat"),
      floatingChatPopup: document.getElementById("floating-chat-popup"),
      
      // Live Telemetry labels
      trackingVehiclePlate: document.getElementById("tracking-vehicle-plate"),
      trackingVehicleStatus: document.getElementById("tracking-vehicle-status"),
      statSpeed: document.getElementById("stat-speed"),
      statDistance: document.getElementById("stat-distance"),
      statEta: document.getElementById("stat-eta"),
      statDuration: document.getElementById("stat-duration"),
      statLocation: document.getElementById("stat-location"),
      statDestination: document.getElementById("stat-destination"),
      
      // Simulator controls
      btnPlayPause: document.getElementById("btn-play-pause"),
      playPauseIcon: document.getElementById("play-pause-icon"),
      playPauseText: document.getElementById("play-pause-text"),
      btnResetTrip: document.getElementById("btn-reset-trip"),
      speedMultiplierRange: document.getElementById("speed-multiplier"),
      speedMultiplierText: document.getElementById("speed-multiplier-text"),
      btnLockCar: document.getElementById("btn-lock-car"),
      
      // Driver details
      driverAvatar: document.getElementById("driver-avatar"),
      driverName: document.getElementById("driver-name"),
      driverRatingVal: document.getElementById("driver-rating-val"),
      driverVehicle: document.getElementById("driver-vehicle"),
      driverPlateDetails: document.getElementById("driver-plate-details"),
      driverPhone: document.getElementById("driver-phone"),
      btnCallDriver: document.getElementById("btn-call-driver"),
      
      // Chat Correspondence
      chatMessages: document.getElementById("chat-messages"),
      chatForm: document.getElementById("chat-form"),
      chatInput: document.getElementById("chat-input"),
      timeline: document.getElementById("timeline"),

      // SOS Dialog Modal
      btnSosTrigger: document.getElementById("btn-sos-trigger"),
      sosModal: document.getElementById("sos-modal"),
      btnCancelSos: document.getElementById("btn-cancel-sos"),
      btnConfirmSos: document.getElementById("btn-confirm-sos"),
      sosDriverName: document.getElementById("sos-driver-name"),
      sosVehicleName: document.getElementById("sos-vehicle-name"),
      sosPlate: document.getElementById("sos-plate"),
      sosLocation: document.getElementById("sos-location"),

      // Sub-views dynamic builders
      devicesTableBody: document.getElementById("devices-table-body"),
      customersGridContainer: document.getElementById("customers-grid-container"),
      btnViewHolderDevices: document.getElementById("btn-view-holder-devices"),
      
      // Admin dashboard sub-views DOM elements
      assignmentsTableBody: document.getElementById("assignments-table-body"),
      maintenanceTableBody: document.getElementById("maintenance-table-body"),
      userManagementTableBody: document.getElementById("user-management-table-body"),
      assignDeviceSelect: document.getElementById("assign-device-select"),
      assignCustomerSelect: document.getElementById("assign-customer-select"),
      assignmentForm: document.getElementById("assignment-form"),
      
      // Customer Edit/Add DOM elements
      btnShowAddCustomer: document.getElementById("btn-show-add-customer"),
      customerFormPanel: document.getElementById("customer-form-panel"),
      customerFormTitle: document.getElementById("customer-form-title"),
      customerEditorForm: document.getElementById("customer-editor-form"),
      editCustomerOriginalEmail: document.getElementById("edit-customer-original-email"),
      customerNameInput: document.getElementById("customer-name-input"),
      customerEmailInput: document.getElementById("customer-email-input"),
      customerPhoneInput: document.getElementById("customer-phone-input"),
      btnCancelCustomerEdit: document.getElementById("btn-cancel-customer-edit")
    };
  }

  // --- Initialize App ---
  function init() {
    initUserAccounts();
    loadDOMReferences();
    loadPersistedCustomerOverrides();
    loadPersistedAssignments();

    // 1. Theme Configuration
    const cachedTheme = localStorage.getItem("gr_theme");
    if (cachedTheme) {
      state.theme = cachedTheme;
    }
    document.body.className = state.theme;
    updateThemeIcons();
    resetAllSimulationStates();

    // 3. Check Authentication State
    const cachedLoggedIn = localStorage.getItem("gr_logged_in") === "true";
    if (cachedLoggedIn) {
      handleSuccessfulLogin(true);
    } else {
      showLoginScreen();
    }

    // 4. Set Up Listeners
    setupEventListeners();
    setupBottomSheetDrag();

    // 5. Draw dynamic SVG icons
    lucide.createIcons();
  }

  // --- Reset All Simulation states ---
  function resetAllSimulationStates() {
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const pts = INTERPOLATED_TRIPS[tripId];
      
      let initialStep = 0;
      let initStatus = meta.status;
      
      if (initStatus === "completed") {
        initialStep = pts.length - 1;
      }
      
      const isOfflineInit = tripId === "trip-3" || tripId === "trip-4";
      
      state.trips[tripId] = {
        currentStepIndex: initialStep,
        elapsedSeconds: 0,
        battery: tripId === "trip-4" ? 18 : (tripId === "trip-3" ? 32 : (tripId === "trip-2" ? 88 : 98)),
        locationName: meta.locationNames[0],
        status: initStatus,
        connectionStatus: isOfflineInit ? "offline" : "online",
        lastPingTime: isOfflineInit ? Date.now() - 30000 : Date.now(),
        lastOnlineTimestamp: isOfflineInit ? "N/A" : new Date().toLocaleTimeString()
      };
    });
  }

  // --- View Redirection Routing ---
  function showLoginScreen() {
    state.isLoggedIn = false;
    DOM.loginContainer.style.display = "flex";
    DOM.appContainer.style.display = "none";
    
    // Clear simulation loop if running
    if (simulationInterval) {
      clearInterval(simulationInterval);
      simulationInterval = null;
    }
  }

  function handleSuccessfulLogin(isCached = false) {
    state.isLoggedIn = true;
    localStorage.setItem("gr_logged_in", "true");

    DOM.loginContainer.style.display = "none";
    DOM.appContainer.style.display = "flex";

    renderNavbars();
    
    // Hydrate user info inside the profile dropdown header & buttons
    populateProfileDropdownDetails();

    // Re-initialize views
    switchTab("live-tracking");

    // Initialize Leaflet Map
    setTimeout(() => {
      initMap();
      if (mapInstance) {
        mapInstance.invalidateSize();
      }
    }, 100);

    // Start Watchdog & Real-Time connection
    startWatchdogClock();
    initRealtimeConnection();

    if (!isCached) {
      showToast("Signed In", "Welcome back to the Findly asset console.", "success");
    }
  }

  // --- Initialize and Get User Accounts Database ---
  function getUserAccounts() {
    const defaultAccounts = [
      {
        name: "Devon Lane",
        email: "devon.lane@outlook.com",
        phone: "+91 98480 22338",
        deviceCode: "DEV-0001",
        serialNumber: "SN-0001",
        password: "user123",
        status: "active"
      },
      {
        name: "Sarah Connor",
        email: "s.connor@cyberdyne.com",
        phone: "+91 81234 56789",
        deviceCode: "DEV-0002",
        serialNumber: "SN-0002",
        password: "user123",
        status: "active"
      },
      {
        name: "Marcus Wright",
        email: "m.wright@resistance.net",
        phone: "+91 78930 11223",
        deviceCode: "DEV-0003",
        serialNumber: "SN-0003",
        password: "user123",
        status: "active"
      },
      {
        name: "Lisa Simpson",
        email: "lisa.s@springfield.org",
        phone: "+91 90001 20002",
        deviceCode: "DEV-0004",
        serialNumber: "SN-0004",
        password: "user123",
        status: "active"
      }
    ];

    const stored = localStorage.getItem("gr_user_accounts");
    if (!stored) {
      localStorage.setItem("gr_user_accounts", JSON.stringify(defaultAccounts));
      return defaultAccounts;
    }
    
    try {
      return JSON.parse(stored);
    } catch(e) {
      localStorage.setItem("gr_user_accounts", JSON.stringify(defaultAccounts));
      return defaultAccounts;
    }
  }

  function initUserAccounts() {
    getUserAccounts();
  }

  // --- Admin Session Role Helper ---
  function isAdminSession() {
    const role = localStorage.getItem("gr_logged_in_role");
    if (role) {
      return role.toLowerCase() === "admin";
    }
    const email = localStorage.getItem("gr_logged_in_email");
    if (!email) return false;
    const emailLower = email.toLowerCase();
    return emailLower === "admin@gmail.com" || emailLower === "admin@findly.com";
  }

  // --- Resolve Active Customer/Owner Email Context ---
  function getActiveCustomerEmail() {
    const loggedInEmail = localStorage.getItem("gr_logged_in_email");
    const isAdmin = isAdminSession();
    
    if (!isAdmin) {
      return loggedInEmail;
    }

    // 1. Explicitly selected customer (e.g. from directory or sidebar click)
    if (state.selectedCustomerEmail) {
      return state.selectedCustomerEmail;
    }
    
    // 2. Active tracked device's customer (if admin is tracking a device)
    if (state.activeTripId) {
      const meta = DEVICES_METADATA[state.activeTripId];
      if (meta && meta.customer && meta.customer.email) {
        return meta.customer.email;
      }
    }
    
    return null;
  }

  // --- Customer ID and Device Code Auto-generators ---
  function getNextCustomerIndex() {
    let maxIdx = 0;
    
    // Check DEFAULTS in DEVICES_METADATA
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      const cust = DEVICES_METADATA[tripId].customer;
      if (cust && cust.customerId) {
        const num = parseInt(cust.customerId.replace("CUST-", ""), 10);
        if (!isNaN(num) && num > maxIdx) {
          maxIdx = num;
        }
      }
    });

    // Check newly added in localStorage
    const newlyAdded = JSON.parse(localStorage.getItem("gr_newly_added_customers") || "[]");
    newlyAdded.forEach(cust => {
      if (cust && cust.customerId) {
        const num = parseInt(cust.customerId.replace("CUST-", ""), 10);
        if (!isNaN(num) && num > maxIdx) {
          maxIdx = num;
        }
      }
    });

    return maxIdx + 1;
  }

  function getNextDeviceIndex() {
    let maxIdx = 0;

    // Check DEVICES_METADATA
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      const dev = DEVICES_METADATA[tripId];
      if (dev && dev.id) {
        const num = parseInt(dev.id.replace("DEV-", ""), 10);
        if (!isNaN(num) && num > maxIdx) {
          maxIdx = num;
        }
      }
    });

    return maxIdx + 1;
  }

  // --- Get Unique Customers Helper ---
  function getUniqueCustomers() {
    const customersMap = {};
    
    // First, gather from DEVICES_METADATA
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      const cust = DEVICES_METADATA[tripId].customer;
      if (cust && cust.email) {
        const emailKey = cust.email.toLowerCase();
        customersMap[emailKey] = {
          customerId: cust.customerId || "CUST-0001",
          name: cust.name,
          email: cust.email,
          phone: cust.phone,
          avatar: cust.avatar
        };
      }
    });

    // Second, gather from localStorage gr_newly_added_customers
    const newlyAdded = JSON.parse(localStorage.getItem("gr_newly_added_customers") || "[]");
    newlyAdded.forEach(cust => {
      if (cust && cust.email) {
        const emailKey = cust.email.toLowerCase();
        customersMap[emailKey] = {
          customerId: cust.customerId || "CUST-XXXX",
          name: cust.name,
          email: cust.email,
          phone: cust.phone,
          avatar: cust.avatar
        };
      }
    });

    // Also include the currently logged-in user if they are not in the metadata
    const loggedInEmail = localStorage.getItem("gr_logged_in_email");
    if (loggedInEmail && !customersMap[loggedInEmail.toLowerCase()]) {
      const signupName = localStorage.getItem("gr_signup_name") || "Account Owner";
      const signupPhone = localStorage.getItem("gr_signup_phone") || "";
      
      let custId = "CUST-0002"; // default for Sarah Connor
      if (loggedInEmail.toLowerCase() === "devon.lane@outlook.com") custId = "CUST-0001";
      else if (loggedInEmail.toLowerCase() === "m.wright@resistance.net") custId = "CUST-0003";
      else if (loggedInEmail.toLowerCase() === "lisa.s@springfield.org") custId = "CUST-0004";
      else {
        // Try to generate dynamically
        custId = "CUST-0005";
      }

      customersMap[loggedInEmail.toLowerCase()] = {
        customerId: custId,
        name: signupName,
        email: loggedInEmail,
        phone: signupPhone,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop"
      };
    }

    return Object.values(customersMap);
  }

  // --- Tab Switching Logic ---
  function switchTab(tabId) {
    const isAdmin = isAdminSession();
    const adminOnlyTabs = ["assignments", "maintenance", "user-management"];
    
    // Permission validation gate
    if (!isAdmin && adminOnlyTabs.includes(tabId)) {
      switchTab("live-tracking");
      return;
    }

    // Redirect fallback for old history tab
    if (tabId === "history") {
      switchTab("reports");
      return;
    }

    // Redirect fallback for old user-management tab to Settings User sub-tab
    if (tabId === "user-management") {
      switchTab("settings");
      setTimeout(() => {
        switchSettingsTab("users");
      }, 50);
      return;
    }

    state.activeTab = tabId;

    // Update active class on nav links
    document.querySelectorAll(".nav-menu-item").forEach(item => {
      if (item.getAttribute("data-tab") === tabId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const pageTitles = {
      "live-tracking": isAdmin ? "Admin Dashboard" : "User Dashboard",
      "devices": isAdmin ? "Device Inventory" : "My Devices",
      "customers": "Customers",
      "assignments": "Device Assignments",
      "reports": "Reports & History",
      "maintenance": "Maintenance",
      "settings": isAdmin ? "Settings" : "Profile Settings",
      "user-management": "User Management",
      "offline-devices": "Offline Devices"
    };

    const mobileTitleEl = document.getElementById("mobile-page-title");
    if (mobileTitleEl && pageTitles[tabId]) {
      mobileTitleEl.textContent = pageTitles[tabId];
    }

    // Hide all drawer overlay modals
    const viewIds = ["devices", "customers", "alerts", "settings", "assignments", "reports", "maintenance", "user-management", "offline-devices"];
    viewIds.forEach(id => {
      const el = document.getElementById(`view-${id}`);
      if (el) el.style.display = "none";
    });

    // View-specific activation
    if (tabId === "live-tracking") {
      // Draw map overview or tracked detail
      if (state.activeTripId && state.isTrackingActive) {
        showActiveTrackingPanel();
      } else {
        showFleetOverviewPanel();
      }

      // Refresh Map state
      setTimeout(() => {
        if (mapInstance) {
          mapInstance.invalidateSize();
          recenterMap(!state.activeTripId);
          drawMapLayers();
        }
      }, 100);

    } else {
      // It's a drawer tab: open the drawer
      const viewPanelEl = document.getElementById(`view-${tabId}`);
      if (viewPanelEl) {
        viewPanelEl.style.display = "flex";
      }

      if (tabId === "devices") {
        renderDevicesInventoryTable();
      } else if (tabId === "customers") {
        renderCustomersGrid();
      } else if (tabId === "assignments") {
        renderAssignments();
      } else if (tabId === "maintenance") {
        renderMaintenance();
      } else if (tabId === "offline-devices") {
        renderOfflineDevicesTable();
      } else if (tabId === "settings") {
        renderSettingsModule();
      } else if (tabId === "reports") {
        const overviewTabBtn = document.getElementById("btn-rep-tab-overview");
        const maintenanceTabBtn = document.getElementById("btn-rep-tab-maintenance");
        const exportsTabBtn = document.getElementById("btn-rep-tab-exports");
        
        const deviceFilterGrp = document.getElementById("rep-filter-grp-device");
        const customerFilterGrp = document.getElementById("rep-filter-grp-customer");
        
        if (isAdmin) {
          if (overviewTabBtn) overviewTabBtn.style.display = "inline-flex";
          if (maintenanceTabBtn) maintenanceTabBtn.style.display = "inline-flex";
          if (exportsTabBtn) exportsTabBtn.style.display = "inline-flex";
          if (deviceFilterGrp) deviceFilterGrp.style.display = "flex";
          if (customerFilterGrp) customerFilterGrp.style.display = "flex";
          
          const activeSubTab = document.querySelector(".reports-tabs-bar .tab-btn.active")?.getAttribute("data-report-tab");
          if (!activeSubTab) {
            switchReportsTab("overview");
          } else {
            switchReportsTab(activeSubTab);
          }
        } else {
          if (overviewTabBtn) overviewTabBtn.style.display = "none";
          if (maintenanceTabBtn) maintenanceTabBtn.style.display = "none";
          if (exportsTabBtn) exportsTabBtn.style.display = "none";
          if (deviceFilterGrp) deviceFilterGrp.style.display = "none";
          if (customerFilterGrp) customerFilterGrp.style.display = "none";
          
          switchReportsTab("activity");
        }
        
        renderReportsAndHistoryModule();
      }
    }
  }

  // --- Show Fleet Overview Panel A ---
  function showFleetOverviewPanel() {
    if (DOM.floatingTelemetryPanel) {
      DOM.floatingTelemetryPanel.style.setProperty("display", "none", "important");
      DOM.floatingTelemetryPanel.classList.add("collapsed");
      DOM.floatingTelemetryPanel.classList.remove("expanded");
    }
    renderFleetCardsList();
  }

  // --- Show Active Telemetry Panel B ---
  function showActiveTrackingPanel() {
    if (DOM.floatingTelemetryPanel) {
      DOM.floatingTelemetryPanel.style.setProperty("display", "flex", "important");
      DOM.floatingTelemetryPanel.classList.remove("collapsed");
    }

    const tripId = state.activeTripId;
    const meta = DEVICES_METADATA[tripId];
    const tripState = state.trips[tripId];
    
    if (DOM.trackingVehiclePlate) DOM.trackingVehiclePlate.textContent = meta.name;
    if (DOM.trackingVehicleStatus) {
      DOM.trackingVehicleStatus.textContent = tripState.status;
      DOM.trackingVehicleStatus.className = `status-badge ${tripState.status}`;
    }
    const trackingVehicleConnectionStatus = document.getElementById("tracking-vehicle-connection-status");
    if (trackingVehicleConnectionStatus) {
      trackingVehicleConnectionStatus.textContent = tripState.connectionStatus;
      trackingVehicleConnectionStatus.className = `status-badge ${tripState.connectionStatus}`;
    }
    if (DOM.statDestination) DOM.statDestination.textContent = meta.category;

    // Mobile compact fields updates
    const mobId = document.getElementById("mobile-compact-id");
    const mobHolder = document.getElementById("mobile-compact-holder");
    const mobLoc = document.getElementById("mobile-compact-location");
    if (mobId) mobId.textContent = meta.id;
    if (mobHolder) mobHolder.textContent = meta.customer ? meta.customer.name : "Unassigned";
    if (mobLoc) mobLoc.textContent = tripState.locationName;

    // Load active customer profile elements
    const customer = meta.customer;
    if (customer) {
      if (DOM.driverAvatar) DOM.driverAvatar.src = customer.avatar;
      if (DOM.driverName) DOM.driverName.textContent = customer.customerId ? `${customer.name} (${customer.customerId})` : customer.name;
      if (DOM.driverVehicle) {
        DOM.driverVehicle.innerHTML = `
          Code: <span class="copyable-text" style="cursor: pointer; color: var(--accent); font-weight: 600;" title="Click to copy Device Code">${meta.id}</span> | 
          Serial: <span class="copyable-text" style="cursor: pointer; color: var(--text-primary); font-weight: 600;" title="Click to copy Serial Number">${meta.serialNumber}</span>
        `;
      }
      if (DOM.driverPlateDetails) DOM.driverPlateDetails.textContent = customer.email;
      if (DOM.driverPhone) DOM.driverPhone.textContent = customer.phone;
      if (DOM.btnCallDriver) DOM.btnCallDriver.href = `tel:${customer.phone}`;
      if (DOM.btnToggleChat) DOM.btnToggleChat.style.display = "inline-flex";
    } else {
      if (DOM.driverAvatar) DOM.driverAvatar.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop";
      if (DOM.driverName) DOM.driverName.textContent = "No Assigned Holder";
      if (DOM.driverVehicle) {
        DOM.driverVehicle.innerHTML = `
          Code: <span class="copyable-text" style="cursor: pointer; color: var(--accent); font-weight: 600;" title="Click to copy Device Code">${meta.id}</span> | 
          Serial: <span class="copyable-text" style="cursor: pointer; color: var(--text-primary); font-weight: 600;" title="Click to copy Serial Number">${meta.serialNumber}</span>
        `;
      }
      if (DOM.driverPlateDetails) DOM.driverPlateDetails.textContent = "N/A";
      if (DOM.driverPhone) DOM.driverPhone.textContent = "N/A";
      if (DOM.btnCallDriver) DOM.btnCallDriver.href = "#";
      if (DOM.btnToggleChat) DOM.btnToggleChat.style.display = "none";
    }

    if (DOM.btnSosTrigger) {
      if (tripState.status === "missing") {
        DOM.btnSosTrigger.innerHTML = '<i data-lucide="check-circle"></i> Mark as Recovered';
        DOM.btnSosTrigger.className = 'btn btn-success btn-sos';
      } else {
        DOM.btnSosTrigger.innerHTML = '<i data-lucide="alert-triangle"></i> Mark as Missing';
        DOM.btnSosTrigger.className = 'btn btn-danger btn-sos';
      }
      lucide.createIcons();
    }

    renderTimelineUI();
    updateTelemetryUIElements();
  }

  // --- Render Fleet Cards List ---
  function renderFleetCardsList() {
    const loggedInEmail = localStorage.getItem("gr_logged_in_email");
    const isAdmin = isAdminSession();

    const list = Object.keys(DEVICES_METADATA).filter(tripId => {
      const meta = DEVICES_METADATA[tripId];
      
      // If user is not admin, only show their own devices
      if (!isAdmin && loggedInEmail) {
        if (!meta.customer || !meta.customer.email || meta.customer.email.toLowerCase() !== loggedInEmail.toLowerCase()) {
          return false;
        }
      }
      
      const tripState = state.trips[tripId];
      
      const customerName = meta.customer ? meta.customer.name : "";
      const matchesSearch = meta.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            meta.serialNumber.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            meta.id.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            customerName.toLowerCase().includes(state.searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (state.statusFilter !== "all") {
        matchesFilter = tripState.status === state.statusFilter;
      }

      return matchesSearch && matchesFilter;
    });

    // Sort to put missing items at the top
    list.sort((a, b) => {
      const aState = state.trips[a];
      const bState = state.trips[b];
      if (aState.status === "missing" && bState.status !== "missing") return -1;
      if (aState.status !== "missing" && bState.status === "missing") return 1;
      return a.localeCompare(b);
    });

    if (list.length === 0) {
      DOM.fleetListContainer.innerHTML = `
        <div class="no-tracking-placeholder-wrapper" style="padding: 20px 0;">
          <p>No matching devices found in inventory.</p>
        </div>
      `;
      return;
    }

    DOM.fleetListContainer.innerHTML = list.map(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const tripState = state.trips[tripId];
      const isTrackingThis = state.activeTripId === tripId && state.isTrackingActive;

      const holderName = meta.customer ? meta.customer.name : "No Assigned Customer";
      const holderAvatar = meta.customer ? meta.customer.avatar : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop";
      const missingClass = tripState.status === "missing" ? "status-missing" : "";
      const connectionClass = tripState.connectionStatus === "offline" ? "status-offline" : "";

      return `
        <div class="fleet-card ${isTrackingThis ? 'active-tracking' : ''} ${missingClass} ${connectionClass}" data-trip-id="${tripId}">
          <div class="fleet-card-header">
            <span class="fleet-card-vehicle">${meta.name}</span>
            <div style="display: flex; gap: 4px; align-items: center;">
              <span class="status-badge ${tripState.status}">${tripState.status}</span>
              <span class="status-badge ${tripState.connectionStatus}">${tripState.connectionStatus}</span>
            </div>
          </div>
          
          <div class="fleet-card-meta">
            <div class="fleet-card-driver">
              <img src="${holderAvatar}" alt="${holderName}">
              <span>${holderName}</span>
            </div>
            <span class="fleet-card-plate">${meta.serialNumber}</span>
          </div>

          <div class="fleet-card-footer">
            <span class="fleet-card-route">Battery: <strong>${tripState.battery}%</strong></span>
            <button class="btn btn-secondary btn-sm card-track-btn" data-trip-id="${tripId}">
              <i data-lucide="navigation" style="width:11px; height:11px; transform:rotate(45deg);"></i>
              ${isTrackingThis ? 'Tracking' : 'Track'}
            </button>
          </div>
        </div>
      `;
    }).join("");

    lucide.createIcons();

    // Attach click events to fleet card Track buttons
    DOM.fleetListContainer.querySelectorAll(".card-track-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const tripId = btn.getAttribute("data-trip-id");
        startTrackingVehicle(tripId);
      });
    });

    // Clicking the card itself highlights it on the map
    DOM.fleetListContainer.querySelectorAll(".fleet-card").forEach(card => {
      card.addEventListener("click", () => {
        const tripId = card.getAttribute("data-trip-id");
        focusVehicleOnMap(tripId);
      });
    });
  }

  // --- Start Tracking a Specific Device ---
  function startTrackingVehicle(tripId) {
    state.activeTripId = tripId;
    state.isTrackingActive = true;
    
    // Toggle body active tracking class
    document.body.classList.add("tracking-active");
    collapseBottomSheet();

    // Collapse search panel if open on mobile
    const floatingFleetPanel = document.getElementById("floating-fleet-panel");
    if (floatingFleetPanel) {
      floatingFleetPanel.classList.remove("mobile-expanded");
      const btnFilterToggle = document.getElementById("btn-filter-toggle");
      if (btnFilterToggle) {
        const filterIcon = btnFilterToggle.querySelector(".filter-icon");
        const chevronUpIcon = btnFilterToggle.querySelector(".chevron-up-icon");
        if (filterIcon && chevronUpIcon) {
          filterIcon.style.display = "block";
          chevronUpIcon.style.display = "none";
        }
      }
    }

    // Switch to active tracking panel
    switchTab("live-tracking");
    
    const tripState = state.trips[tripId];
    
    // Clear milestones tracker and triggers for this specific trip
    repopulateMilestones(tripId);

    // Initial messages
    if (DOM.chatMessages) DOM.chatMessages.innerHTML = "";
    addChatBubble(`System: Direct telemetry monitoring established.`, "system");
    const customerName = DEVICES_METADATA[tripId].customer ? DEVICES_METADATA[tripId].customer.name : "System";
    addChatBubble(`${customerName}: Hello. Telemetry connection established. Device is active.`, "driver");

    // Set simulator inputs
    state.isPaused = false;
    if (DOM.playPauseIcon) DOM.playPauseIcon.setAttribute("data-lucide", "pause");
    if (DOM.playPauseText) DOM.playPauseText.textContent = "Pause Telemetry";
    if (DOM.btnPlayPause) DOM.btnPlayPause.className = "btn btn-primary btn-sm";
    lucide.createIcons();

    // Force map fits & draw
    drawMapLayers();
    recenterMap(false);
  }

  // --- Stop Tracking a Specific Device ---
  function stopTrackingVehicle() {
    state.activeTripId = null;
    state.isTrackingActive = false;
    
    document.body.classList.remove("tracking-active");

    if (DOM.floatingTelemetryPanel) {
      DOM.floatingTelemetryPanel.style.setProperty("display", "none", "important");
      DOM.floatingTelemetryPanel.classList.add("collapsed");
      DOM.floatingTelemetryPanel.classList.remove("expanded");
    }
    if (DOM.floatingChatPopup) {
      DOM.floatingChatPopup.style.display = "none";
    }

    if (mapInstance) {
      setTimeout(() => {
        mapInstance.invalidateSize();
        recenterMap(true); // Fit all vehicles on overview map
        drawMapLayers();
      }, 100);
    }
    
    renderFleetCardsList();
    showToast("Tracking Stopped", "Returned to device overview map.", "info");
  }

  function focusVehicleOnMap(tripId) {
    if (!mapInstance) return;
    const pts = INTERPOLATED_TRIPS[tripId];
    const idx = state.trips[tripId].currentStepIndex;
    const currentLoc = pts[idx];
    mapInstance.setView(currentLoc, 15, { animate: true, duration: 0.5 });
  }

  // --- Repopulate milestones based on current step index ---
  function repopulateMilestones(tripId) {
    // Retained for backward compatibility
  }

  function completeMilestone(id) {
    // Retained for backward compatibility
  }

  function renderTimelineUI() {
    if (!DOM.timeline || !state.activeTripId) return;
    const meta = DEVICES_METADATA[state.activeTripId];
    if (!meta || !meta.activityLogs) return;

    DOM.timeline.innerHTML = meta.activityLogs.map((log, index) => {
      const isFirst = index === 0;
      const stepClass = isFirst ? "timeline-step active" : "timeline-step completed";
      return `
        <div class="${stepClass}">
          <span>${log}</span>
        </div>
      `;
    }).join("");
  }

  function renderMobileHistory() {
    const tableBody = document.querySelector("#view-history tbody");
    const mobileList = document.getElementById("mobile-history-list");
    if (!tableBody || !mobileList) return;

    const rows = Array.from(tableBody.querySelectorAll("tr"));
    mobileList.innerHTML = rows.map(row => {
      const cells = row.querySelectorAll("td");
      if (cells.length < 7) return "";
      
      const date = cells[0].textContent.trim();
      const txId = cells[1].textContent.trim();
      const device = cells[2].textContent.trim();
      const holder = cells[3].textContent.trim();
      const duration = cells[4].textContent.trim();
      const warranty = cells[5].textContent.trim();
      const statusHtml = cells[6].innerHTML;

      return `
        <div class="mobile-history-card">
          <div class="mobile-history-header">
            <span class="mobile-history-device">${device}</span>
            ${statusHtml}
          </div>
          <div class="mobile-history-details">
            <div><strong>Date:</strong> ${date}</div>
            <div><strong>TX ID:</strong> ${txId}</div>
            <div><strong>Holder:</strong> ${holder}</div>
            <div><strong>Lease:</strong> ${duration}</div>
            <div style="grid-column: span 2; margin-top: 4px; border-top: 1px solid var(--border-color); padding-top: 4px;">
              <strong>Warranty:</strong> ${warranty}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- Render Sub-views ---
  function renderDevicesInventoryTable() {
    const activeEmail = getActiveCustomerEmail();
    const isAdmin = isAdminSession();
    
    // Filter devices for the active customer/owner
    let tripIds = [];
    if (!isAdmin) {
      const loggedInEmail = localStorage.getItem("gr_logged_in_email") || "";
      tripIds = Object.keys(DEVICES_METADATA).filter(tripId => {
        const meta = DEVICES_METADATA[tripId];
        return meta.customer && meta.customer.email && meta.customer.email.toLowerCase() === loggedInEmail.toLowerCase();
      });
    } else {
      if (activeEmail) {
        tripIds = Object.keys(DEVICES_METADATA).filter(tripId => {
          const meta = DEVICES_METADATA[tripId];
          return meta.customer && meta.customer.email && meta.customer.email.toLowerCase() === activeEmail.toLowerCase();
        });
      } else {
        tripIds = Object.keys(DEVICES_METADATA);
      }
    }

    if (tripIds.length === 0) {
      const emptyStateHtml = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-secondary);">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <i data-lucide="cpu" style="width: 32px; height: 32px; color: var(--text-muted); opacity: 0.5;"></i>
              <span>No devices assigned to this customer.</span>
            </div>
          </td>
        </tr>
      `;
      DOM.devicesTableBody.innerHTML = emptyStateHtml;

      const mobileListEl = document.getElementById("mobile-devices-list");
      if (mobileListEl) {
        mobileListEl.innerHTML = `
          <div class="empty-state" style="text-align: center; padding: 32px; color: var(--text-secondary); width: 100%;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <i data-lucide="cpu" style="width: 32px; height: 32px; color: var(--text-muted); opacity: 0.5;"></i>
              <span>No devices assigned to this customer.</span>
            </div>
          </div>
        `;
      }
      lucide.createIcons();
      return;
    }

    DOM.devicesTableBody.innerHTML = tripIds.map(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const tripState = state.trips[tripId];
      
      let batteryClass = "success";
      if (tripState.battery <= 20) { batteryClass = "danger"; }
      else if (tripState.battery <= 50) { batteryClass = "warning"; }
      else if (tripState.battery <= 80) { batteryClass = "info"; }

      const holderName = meta.customer ? (meta.customer.customerId ? `${meta.customer.name} (${meta.customer.customerId})` : meta.customer.name) : "Unassigned";

      return `
        <tr>
          <td>
            <div style="font-weight:700;">${meta.name}</div>
            <div style="font-size:0.675rem; color:var(--text-muted);">Asset ID: ${meta.id}</div>
          </td>
          <td><span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${meta.id}</span></td>
          <td><span class="fleet-card-plate">${meta.serialNumber}</span></td>
          <td>${holderName}</td>
          <td>
            <span class="badge badge-${batteryClass}">${tripState.battery}%</span>
          </td>
          <td>${meta.category}</td>
          <td>
            <div style="display:flex; flex-direction:column; gap:4px; align-items:flex-start;">
              <span class="status-badge ${tripState.status}">${tripState.status}</span>
              <span class="status-badge ${tripState.connectionStatus}">${tripState.connectionStatus}</span>
            </div>
          </td>
          <td>
            <button class="btn btn-secondary btn-sm asset-track-btn" data-trip-id="${tripId}">
              <i data-lucide="navigation" style="width:11px; height:11px; transform:rotate(45deg);"></i> Track
            </button>
          </td>
        </tr>
      `;
    }).join("");

    const mobileListEl = document.getElementById("mobile-devices-list");
    if (mobileListEl) {
      mobileListEl.innerHTML = tripIds.map(tripId => {
        const meta = DEVICES_METADATA[tripId];
        const tripState = state.trips[tripId];
        
        let batteryClass = "success";
        if (tripState.battery <= 20) { batteryClass = "danger"; }
        else if (tripState.battery <= 50) { batteryClass = "warning"; }
        else if (tripState.battery <= 80) { batteryClass = "info"; }

        const holderName = meta.customer ? (meta.customer.customerId ? `${meta.customer.name} (${meta.customer.customerId})` : meta.customer.name) : "Unassigned";
        
        // Render last updated time
        const now = Date.now();
        let secondsText = "Waiting for ping";
        if (state.lastUpdateReceivedTime) {
          const seconds = Math.floor((now - state.lastUpdateReceivedTime) / 1000);
          secondsText = `${seconds}s ago`;
        }

        return `
          <div class="mobile-device-card" data-trip-id="${tripId}">
            <div class="mobile-device-card-header">
              <span class="mobile-device-name">${meta.name}</span>
              <div style="display:flex; gap:4px; align-items:center;">
                <span class="status-badge ${tripState.status}">${tripState.status}</span>
                <span class="status-badge ${tripState.connectionStatus}">${tripState.connectionStatus}</span>
              </div>
            </div>
            <div class="mobile-device-card-details">
              <div><strong>Asset ID:</strong> ${meta.id}</div>
              <div><strong>Serial:</strong> ${meta.serialNumber}</div>
              <div><strong>Holder:</strong> ${holderName}</div>
              <div><strong>Category:</strong> ${meta.category}</div>
              <div class="mobile-device-card-metrics">
                <span><strong>Battery:</strong> <span class="badge badge-${batteryClass}">${tripState.battery}%</span></span>
                <span><strong>Last Update:</strong> ${secondsText}</span>
              </div>
            </div>
            <div class="mobile-device-card-actions">
              <button class="btn btn-secondary btn-sm btn-block asset-track-btn" data-trip-id="${tripId}">
                <i data-lucide="navigation" style="width:14px; height:14px; transform:rotate(45deg);"></i> Track Device
              </button>
            </div>
          </div>
        `;
      }).join("");
    }

    lucide.createIcons();

    // Bind action
    document.querySelectorAll(".asset-track-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tripId = btn.getAttribute("data-trip-id");
        // Hide the drawer
        const drawer = document.getElementById("view-devices");
        if (drawer) {
          drawer.style.display = "none";
        }
        startTrackingVehicle(tripId);
      });
    });
  }

  function renderCustomersGrid() {
    // 1. Get unique customers (by email)
    let uniqueCustomers = getUniqueCustomers();
    const isAdmin = isAdminSession();
    
    if (!isAdmin) {
      const loggedInEmail = localStorage.getItem("gr_logged_in_email") || "";
      uniqueCustomers = uniqueCustomers.filter(c => c.email && c.email.toLowerCase() === loggedInEmail.toLowerCase());
    }
    
    const btnShowAddCustomer = document.getElementById("btn-show-add-customer");
    if (btnShowAddCustomer) {
      btnShowAddCustomer.style.display = isAdmin ? "block" : "none";
    }

    DOM.customersGridContainer.innerHTML = uniqueCustomers.map(customer => {
      // Find all devices assigned to this customer
      const assignedTripIds = Object.keys(DEVICES_METADATA).filter(tripId => {
        const devMeta = DEVICES_METADATA[tripId];
        return devMeta.customer && devMeta.customer.email && devMeta.customer.email.toLowerCase() === customer.email.toLowerCase();
      });

      let leasedDeviceText = "None";
      let serialNumberText = "N/A";
      let leaseStatusText = "UNASSIGNED";
      let isOnline = false;
      let primaryTripId = "";

      if (assignedTripIds.length > 0) {
        primaryTripId = assignedTripIds[0];
        const firstTripState = state.trips[primaryTripId];
        
        // Map all device codes (IDs)
        const deviceCodes = assignedTripIds.map(tid => DEVICES_METADATA[tid]?.id || "").filter(Boolean);
        const serialNumbers = assignedTripIds.map(tid => DEVICES_METADATA[tid]?.serialNumber || "").filter(Boolean);
        
        leasedDeviceText = deviceCodes.join(", ");
        serialNumberText = serialNumbers.join(", ");
        
        leaseStatusText = firstTripState.status.toUpperCase();
        if (assignedTripIds.length > 1) {
          leaseStatusText += ` (${assignedTripIds.length} Devices)`;
        }
        isOnline = assignedTripIds.some(tid => state.trips[tid]?.status !== "missing");
      }

      return `
        <div class="driver-profile-card">
          <div class="driver-profile-header">
            <img src="${customer.avatar}" alt="${customer.name}" class="driver-profile-avatar">
            <div class="driver-profile-info">
              <span class="driver-profile-name">${customer.name}</span>
              <span style="font-size:0.65rem; color:var(--text-muted); display:block; margin-top:2px;">ID: ${customer.customerId || 'CUST-XXXX'}</span>
            </div>
            <span class="driver-profile-status ${assignedTripIds.length > 0 ? (isOnline ? 'online' : 'offline') : 'offline'}">
              ${assignedTripIds.length > 0 ? (isOnline ? 'Active' : 'Missing') : 'Inactive'}
            </span>
          </div>

          <div class="driver-profile-stats">
            <div class="driver-stat">
              <span class="driver-stat-label">Device Code(s)</span>
              <div style="display: flex; align-items: center; gap: 4px; overflow: hidden; width: 100%;">
                <span class="driver-stat-val" style="font-size:0.65rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex: 1;" title="${leasedDeviceText}">${leasedDeviceText}</span>
                ${leasedDeviceText !== "None" ? `
                  <button class="btn-copy-card-stat" data-copy-text="${leasedDeviceText}" title="Copy Device Code(s)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:0; display:flex; align-items:center; transition:color 0.2s;">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                ` : ''}
              </div>
            </div>
            <div class="driver-stat">
              <span class="driver-stat-label">Serial Number(s)</span>
              <div style="display: flex; align-items: center; gap: 4px; overflow: hidden; width: 100%;">
                <span class="driver-stat-val" style="font-size:0.65rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex: 1;" title="${serialNumberText}">${serialNumberText}</span>
                ${serialNumberText !== "N/A" ? `
                  <button class="btn-copy-card-stat" data-copy-text="${serialNumberText}" title="Copy Serial Number(s)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:0; display:flex; align-items:center; transition:color 0.2s;">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                ` : ''}
              </div>
            </div>
            <div class="driver-stat" style="grid-column: span 2; margin-top: 4px; border-top: 1px solid var(--border-color); padding-top: 4px;">
              <span class="driver-stat-label">Lease Status</span>
              <span class="driver-stat-val" style="font-size:0.65rem;">${leaseStatusText}</span>
            </div>
          </div>

          <div class="driver-profile-actions">
            <a href="tel:${customer.phone}" class="btn btn-secondary btn-sm" style="flex:1;">
              <i data-lucide="phone" style="width:12px; height:12px;"></i> Call
            </a>
            <button class="btn btn-secondary btn-sm driver-devices-btn" data-customer-email="${customer.email}" style="flex:1;">
              <i data-lucide="cpu" style="width:12px; height:12px;"></i> Devices
            </button>
            <button class="btn btn-secondary btn-sm driver-msg-btn" data-customer-phone="${customer.phone || ''}" style="flex:1;">
              <i data-lucide="message-square" style="width:12px; height:12px;"></i> Chat
            </button>
            ${isAdmin ? `
            <button class="btn btn-secondary btn-sm driver-edit-btn" data-customer-email="${customer.email}" style="flex:1;">
              <i data-lucide="edit-3" style="width:12px; height:12px;"></i> Edit
            </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");

    lucide.createIcons();

    // Bind message / chat buttons (WhatsApp redirect)
    DOM.customersGridContainer.querySelectorAll(".driver-msg-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const phone = btn.getAttribute("data-customer-phone");
        openWhatsAppChat(phone);
      });
    });

    // Bind Devices click buttons
    DOM.customersGridContainer.querySelectorAll(".driver-devices-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const email = btn.getAttribute("data-customer-email");
        state.selectedCustomerEmail = email;
        
        // Hide customers drawer first to avoid overlapping drawer issues
        const custDrawer = document.getElementById("view-customers");
        if (custDrawer) custDrawer.style.display = "none";
        
        switchTab("devices");
      });
    });

    // Bind Edit button
    DOM.customersGridContainer.querySelectorAll(".driver-edit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const email = btn.getAttribute("data-customer-email");
        const cust = uniqueCustomers.find(c => c.email.toLowerCase() === email.toLowerCase());
        if (cust) {
          showCustomerEditForm(cust);
        }
      });
    });
  }

  // --- Dynamic Navbar Implementation ---
  function renderNavbars() {
    const isAdmin = isAdminSession();
    
    // Top Desktop Menu HTML
    let topNavHtml = `
      <a href="#" class="nav-menu-item" data-tab="devices">
        <i data-lucide="cpu"></i>
        <span>${isAdmin ? 'Device Inventory' : 'My Devices'}</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="customers">
        <i data-lucide="users"></i>
        <span>Customers</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="reports">
        <i data-lucide="bar-chart-2"></i>
        <span>Reports & History</span>
      </a>
    `;
    
    if (isAdmin) {
      topNavHtml += `
        <a href="#" class="nav-menu-item" data-tab="maintenance">
          <i data-lucide="wrench"></i>
          <span>Maintenance</span>
        </a>
      `;
    }
    
    topNavHtml += `
      <a href="#" class="nav-menu-item" data-tab="alerts">
        <i data-lucide="bell"></i>
        <span>Alerts</span>
        <span class="alert-badge" id="sidebar-alert-badge">3</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="settings">
        <i data-lucide="settings"></i>
        <span>Settings</span>
      </a>
    `;

    // Mobile Bottom Menu HTML
    let mobileNavHtml = `
      <a href="#" class="nav-menu-item" data-tab="live-tracking">
        <i data-lucide="home"></i>
        <span>Dashboard</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="devices">
        <i data-lucide="cpu"></i>
        <span>Devices</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="customers">
        <i data-lucide="users"></i>
        <span>Customers</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="reports">
        <i data-lucide="bar-chart-2"></i>
        <span>Reports</span>
      </a>
    `;
    
    if (isAdmin) {
      mobileNavHtml += `
        <a href="#" class="nav-menu-item" data-tab="maintenance">
          <i data-lucide="wrench"></i>
          <span>Maint</span>
        </a>
      `;
    }
    
    mobileNavHtml += `
      <a href="#" class="nav-menu-item" data-tab="alerts">
        <i data-lucide="bell"></i>
        <span>Alerts</span>
        <span class="alert-badge" id="mobile-bottom-alert-badge">3</span>
      </a>
      <a href="#" class="nav-menu-item" data-tab="settings">
        <i data-lucide="settings"></i>
        <span>Settings</span>
      </a>
    `;

    const topNavContainer = document.querySelector(".nav-center-menu");
    const mobileNavContainer = document.getElementById("mobile-bottom-nav");
    
    if (topNavContainer) topNavContainer.innerHTML = topNavHtml;
    if (mobileNavContainer) mobileNavContainer.innerHTML = mobileNavHtml;
    
    // Bind click events
    document.querySelectorAll(".nav-menu-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const tabId = item.getAttribute("data-tab");
        switchTab(tabId);
      });
    });
    
    lucide.createIcons();
    
    // Update active state class manually after render
    document.querySelectorAll(".nav-menu-item").forEach(item => {
      if (item.getAttribute("data-tab") === state.activeTab) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    updateAlertBadgesCount();
  }

  // --- Update Alert Counters ---
  function updateAlertBadgesCount() {
    const alertsList = document.querySelector(".alerts-list");
    if (!alertsList) return;
    
    const isAdmin = isAdminSession();
    const loggedInEmail = localStorage.getItem("gr_logged_in_email");
    const userAccounts = getUserAccounts();
    const currentUser = userAccounts.find(acc => acc.email && acc.email.toLowerCase() === (loggedInEmail ? loggedInEmail.toLowerCase() : ""));
    const currentUserName = currentUser ? currentUser.name : "";
    const currentUserEmail = currentUser ? currentUser.email : "";
    
    // Find all devices assigned to this user in DEVICES_METADATA
    const userDevices = [];
    if (loggedInEmail) {
      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const dev = DEVICES_METADATA[tripId];
        if (dev.customer && dev.customer.email && dev.customer.email.toLowerCase() === loggedInEmail.toLowerCase()) {
          userDevices.push(dev);
        }
      });
    }

    let count = 0;
    const alertItems = alertsList.querySelectorAll(".alert-item");
    alertItems.forEach(item => {
      let shouldShow = true;
      if (!isAdmin) {
        // If not admin, filter alerts based on whether they belong to the current user
        const text = item.textContent || "";
        const matchesUser = (currentUserName && text.includes(currentUserName)) ||
                            (currentUserEmail && text.includes(currentUserEmail)) ||
                            userDevices.some(dev => {
                              return (dev.id && text.includes(dev.id)) ||
                                     (dev.serialNumber && text.includes(dev.serialNumber));
                            });
        
        if (item.id === "alert-item-missing-dev") {
          const descEl = document.getElementById("alert-desc-missing-dev");
          const descText = descEl ? descEl.textContent || "" : "";
          const matchesDynamic = userDevices.some(dev => {
            return (dev.id && descText.includes(dev.id)) ||
                   (dev.serialNumber && descText.includes(dev.serialNumber));
          });
          
          const isCurrentlyActive = item.getAttribute("data-active") === "true" || item.style.display === "flex";
          shouldShow = isCurrentlyActive && matchesDynamic;
        } else {
          shouldShow = matchesUser;
        }
      } else {
        // If admin, check if missing-dev is flagged active
        if (item.id === "alert-item-missing-dev") {
          const isCurrentlyActive = item.getAttribute("data-active") === "true" || item.style.display === "flex";
          shouldShow = isCurrentlyActive;
        }
      }

      if (shouldShow) {
        item.style.setProperty("display", "flex", "important");
        count++;
      } else {
        item.style.setProperty("display", "none", "important");
      }
    });
    
    const sidebarBadge = document.getElementById("sidebar-alert-badge");
    const mobileBadge = document.getElementById("mobile-bottom-alert-badge");
    const mobileHeaderBadge = document.getElementById("mobile-notification-badge");
    
    if (sidebarBadge) sidebarBadge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
    if (mobileHeaderBadge) mobileHeaderBadge.textContent = count;
  }

  // --- Assignments Module ---
  function renderAssignments() {
    const devices = Object.keys(DEVICES_METADATA);
    const customers = getUniqueCustomers();
    
    const devSelect = document.getElementById("assign-device-select");
    const custSelect = document.getElementById("assign-customer-select");
    
    if (devSelect) {
      devSelect.innerHTML = devices.map(tripId => {
        const meta = DEVICES_METADATA[tripId];
        return `<option value="${tripId}">${meta.name} (${meta.id} - ${meta.serialNumber})</option>`;
      }).join("");
    }
    
    if (custSelect) {
      custSelect.innerHTML = customers.map(cust => {
        return `<option value="${cust.email}">${cust.name} (${cust.customerId || 'CUST-XXXX'})</option>`;
      }).join("");
    }
    
    const tableBody = document.getElementById("assignments-table-body");
    if (tableBody) {
      tableBody.innerHTML = devices.map(tripId => {
        const meta = DEVICES_METADATA[tripId];
        const tripState = state.trips[tripId];
        const hasHolder = meta.customer !== null;
        const holderName = hasHolder ? (meta.customer.customerId ? `${meta.customer.name} (${meta.customer.customerId})` : meta.customer.name) : "Unassigned";
        const holderEmail = hasHolder ? meta.customer.email : "N/A";
        
        return `
          <tr>
            <td>
              <strong>${meta.name}</strong><br>
              <span style="font-size:0.675rem; color:var(--text-muted);">Code: ${meta.id}</span>
            </td>
            <td><span class="fleet-card-plate">${meta.serialNumber}</span></td>
            <td>${holderName}</td>
            <td>${holderEmail}</td>
            <td><span class="status-badge ${tripState.status}">${tripState.status}</span></td>
            <td>
              ${hasHolder 
                ? `<button class="btn btn-secondary btn-sm deallocate-btn" data-trip-id="${tripId}">De-allocate</button>` 
                : `<span style="color:var(--text-muted); font-size:0.75rem;">None</span>`}
            </td>
          </tr>
        `;
      }).join("");
      
      tableBody.querySelectorAll(".deallocate-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const tripId = btn.getAttribute("data-trip-id");
          deallocateDevice(tripId);
        });
      });
    }
  }

  function deallocateDevice(tripId) {
    if (!DEVICES_METADATA[tripId]) return;
    
    const meta = DEVICES_METADATA[tripId];
    showToast("Device De-allocated", `${meta.name} is now unassigned and available.`, "info");
    
    meta.customer = null;
    meta.status = "available";
    if (state.trips[tripId]) {
      state.trips[tripId].status = "available";
    }
    
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const txId = "TX-" + Math.floor(1000 + Math.random() * 9000);
    
    state.reportsHistory.unshift({
      dateTime: formattedDate,
      txId: txId,
      deviceName: meta.name,
      holder: "None",
      email: "n/a",
      duration: "0 Months",
      warranty: meta.warrantyStatus || "Active",
      status: "Returned",
      badgeClass: "available",
      type: "return"
    });
    
    savePersistedAssignments();
    renderAssignments();
    renderDevicesInventoryTable();
    renderFleetCardsList();
    drawMapLayers();
  }

  function handleAssignmentSubmit(e) {
    e.preventDefault();
    const devSelect = document.getElementById("assign-device-select");
    const custSelect = document.getElementById("assign-customer-select");
    if (!devSelect || !custSelect) return;
    
    const tripId = devSelect.value;
    const email = custSelect.value;
    
    const customers = getUniqueCustomers();
    const customer = customers.find(c => c.email.toLowerCase() === email.toLowerCase());
    
    if (customer && DEVICES_METADATA[tripId]) {
      const meta = DEVICES_METADATA[tripId];
      meta.customer = {
        name: customer.name,
        phone: customer.phone,
        email: customer.email,
        avatar: customer.avatar
      };
      
      meta.status = "assigned";
      if (state.trips[tripId]) {
        state.trips[tripId].status = "assigned";
      }
      
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
      const txId = "TX-" + Math.floor(1000 + Math.random() * 9000);
      
      state.reportsHistory.unshift({
        dateTime: formattedDate,
        txId: txId,
        deviceName: meta.name,
        holder: customer.name,
        email: customer.email,
        duration: "12 Months",
        warranty: meta.warrantyStatus || "Active",
        status: "Assigned",
        badgeClass: "assigned",
        type: "assignment"
      });
      
      savePersistedAssignments();
      renderAssignments();
      renderDevicesInventoryTable();
      renderFleetCardsList();
      drawMapLayers();
      
      showToast("Device Assigned", `Assigned ${meta.name} to ${customer.name}.`, "success");
    }
  }

  // --- Maintenance Management ---
  function renderMaintenance() {
    const devices = Object.keys(DEVICES_METADATA);
    const maintenanceDevices = devices.filter(tripId => state.trips[tripId].status === "maintenance");
    
    const tableBody = document.getElementById("maintenance-table-body");
    if (!tableBody) return;
    
    if (maintenanceDevices.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-secondary);">
            No devices currently in maintenance.
          </td>
        </tr>
      `;
      return;
    }
    
    const diagnosticIssues = {
      "trip-1": "HDMI Port Disconnection",
      "trip-2": "Fan Noise & Overheating",
      "trip-3": "Bulb Flicker & Telemetry Offline",
      "trip-4": "GPS Calibration Out of Bounds",
      "trip-5": "Lens Shutter Jammed"
    };
    
    const repairers = {
      "trip-1": "TechCare Hyderabad",
      "trip-2": "FixIt Solutions",
      "trip-3": "Findly Repair Depot",
      "trip-4": "Global GPS Services",
      "trip-5": "Camera Clinic"
    };
    
    const lastServiced = {
      "trip-1": "2026-05-12",
      "trip-2": "2026-06-02",
      "trip-3": "2026-04-16",
      "trip-4": "2026-02-14",
      "trip-5": "2026-06-12"
    };
    
    tableBody.innerHTML = maintenanceDevices.map(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const issue = diagnosticIssues[tripId] || "General Hardware Diagnostics";
      const repairer = repairers[tripId] || "Findly Service Center";
      const dateServiced = lastServiced[tripId] || "2026-06-20";
      
      return `
        <tr>
          <td><strong>${meta.name}</strong></td>
          <td><span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${meta.id}</span></td>
          <td><span class="fleet-card-plate">${meta.serialNumber}</span></td>
          <td>${issue}</td>
          <td>${repairer}</td>
          <td>${dateServiced}</td>
          <td><span class="status-badge maintenance">maintenance</span></td>
          <td>
            <button class="btn btn-success btn-sm complete-maintenance-btn" data-trip-id="${tripId}">
              Complete Repair
            </button>
          </td>
        </tr>
      `;
    }).join("");
    
    tableBody.querySelectorAll(".complete-maintenance-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tripId = btn.getAttribute("data-trip-id");
        completeMaintenance(tripId);
      });
    });
  }

  function completeMaintenance(tripId) {
    if (!DEVICES_METADATA[tripId]) return;
    
    const meta = DEVICES_METADATA[tripId];
    showToast("Maintenance Completed", `${meta.name} has been repaired and is now Available.`, "success");
    
    meta.customer = null;
    meta.status = "available";
    if (state.trips[tripId]) {
      state.trips[tripId].status = "available";
    }

    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    
    const diagnosticIssues = {
      "trip-1": "HDMI Port Disconnection",
      "trip-2": "Fan Noise & Overheating",
      "trip-3": "Bulb Flicker & Telemetry Offline",
      "trip-4": "GPS Calibration Out of Bounds",
      "trip-5": "Lens Shutter Jammed"
    };
    const repairers = {
      "trip-1": "TechCare Hyderabad",
      "trip-2": "FixIt Solutions",
      "trip-3": "Findly Repair Depot",
      "trip-4": "Global GPS Services",
      "trip-5": "Camera Clinic"
    };
    
    const issue = diagnosticIssues[tripId] || "General Hardware Diagnostics";
    const repairer = repairers[tripId] || "Findly Service Center";
    
    state.maintenanceHistory.unshift({
      dateResolved: formattedDate,
      deviceId: meta.id,
      serialNumber: meta.serialNumber,
      issue: issue,
      repairer: repairer,
      location: "HITEC City Hub",
      status: "REPAIRED"
    });

    state.reportsHistory.unshift({
      dateTime: formattedDate,
      txId: "TX-" + Math.floor(1000 + Math.random() * 9000),
      deviceName: meta.name,
      holder: "Service Tech (" + repairer + ")",
      email: "maintenance@findly.com",
      duration: "N/A",
      warranty: meta.warrantyStatus || "Active",
      status: "Returned",
      badgeClass: "available",
      type: "maintenance"
    });
    
    savePersistedAssignments();
    renderMaintenance();
    renderDevicesInventoryTable();
    renderFleetCardsList();
    drawMapLayers();
  }

  // --- User Management ---
  function renderUserManagement() {
    const customers = getUniqueCustomers();
    const tableBody = document.getElementById("user-management-table-body");
    if (!tableBody) return;
    
    const users = [
      {
        name: "Console Admin",
        email: "admin@gmail.com",
        phone: "+91 90000 00000",
        registeredDate: "2026-01-01",
        accountType: "System Admin",
        verification: "Verified"
      },
      ...customers.map(cust => {
        const isCompany = cust.email.includes("outlook") || cust.email.includes("resistance") || cust.email.includes("springfield") || cust.email.includes("cyberdyne");
        return {
          name: cust.name,
          email: cust.email,
          phone: cust.phone || "N/A",
          registeredDate: "2026-06-10",
          accountType: isCompany ? "Company" : "Individual",
          verification: "Verified"
        };
      })
    ];
    
    tableBody.innerHTML = users.map(user => {
      return `
        <tr>
          <td><strong>${user.name}</strong></td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.registeredDate}</td>
          <td><span class="badge ${user.accountType === 'System Admin' ? 'badge-info' : 'badge-success'}">${user.accountType}</span></td>
          <td><span class="status-badge available">${user.verification}</span></td>
        </tr>
      `;
    }).join("");
  }

  // --- Settings Refactor Implementation ---
  function switchSettingsTab(subTabId) {
    const isAdmin = isAdminSession();
    
    // Safety check for user access control
    if (!isAdmin && ["users", "roles", "preferences"].includes(subTabId)) {
      subTabId = "general";
    }

    // Update active tab button style
    document.querySelectorAll(".settings-tabs-bar .tab-btn").forEach(btn => {
      if (btn.getAttribute("data-settings-tab") === subTabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Hide all tab sections, show the correct one
    const sections = {
      "general": "sett-sec-general",
      "users": "sett-sec-users",
      "roles": "sett-sec-roles",
      "notifications": "sett-sec-notifications",
      "security": "sett-sec-security",
      "preferences": "sett-sec-preferences"
    };

    Object.keys(sections).forEach(key => {
      const el = document.getElementById(sections[key]);
      if (el) {
        el.style.display = (key === subTabId) ? "block" : "none";
      }
    });

    // Execute sub-tab specific rendering logic
    if (subTabId === "users") {
      renderUserManagement();
    }
    lucide.createIcons();
  }

  function renderSettingsModule() {
    const isAdmin = isAdminSession();
    const loggedInEmail = localStorage.getItem("gr_logged_in_email") || "user@gmail.com";
    const signupName = localStorage.getItem("gr_signup_name") || (isAdmin ? "Console Admin" : "Account Owner");
    const signupPhone = localStorage.getItem("gr_signup_phone") || "+91 90000 00000";

    // 1. Hide/Show Admin Settings Tabs
    const usersTabBtn = document.getElementById("btn-sett-tab-users");
    const rolesTabBtn = document.getElementById("btn-sett-tab-roles");
    const prefTabBtn = document.getElementById("btn-sett-tab-preferences");

    if (usersTabBtn) usersTabBtn.style.display = isAdmin ? "inline-flex" : "none";
    if (rolesTabBtn) rolesTabBtn.style.display = isAdmin ? "inline-flex" : "none";
    if (prefTabBtn) prefTabBtn.style.display = isAdmin ? "inline-flex" : "none";

    // 2. Populate Profile Fields in General Settings
    const nameInput = document.getElementById("sett-profile-name");
    const emailInput = document.getElementById("sett-profile-email");
    const phoneInput = document.getElementById("sett-profile-phone");
    const tenantInput = document.getElementById("sett-profile-tenant");

    if (nameInput) nameInput.value = signupName;
    if (emailInput) emailInput.value = loggedInEmail;
    if (phoneInput) phoneInput.value = signupPhone;
    if (tenantInput) tenantInput.value = isAdmin ? "Findly Corp" : "Individual Client";

    // 3. Switch to default tab if active one is admin-only and user is standard
    const activeSubTab = document.querySelector(".settings-tabs-bar .tab-btn.active")?.getAttribute("data-settings-tab") || "general";
    if (!isAdmin && ["users", "roles", "preferences"].includes(activeSubTab)) {
      switchSettingsTab("general");
    } else {
      switchSettingsTab(activeSubTab);
    }
  }

  function renderOfflineDevicesTable() {
    const tableBody = document.getElementById("offline-devices-table-body");
    const mobileList = document.getElementById("mobile-offline-devices-list");
    if (!tableBody) return;

    const offlineTrips = Object.keys(DEVICES_METADATA).filter(tripId => {
      const tripState = state.trips[tripId];
      return tripState && tripState.connectionStatus === "offline";
    });

    if (offlineTrips.length === 0) {
      const emptyRow = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-secondary);">
            No Offline Devices Found.
          </td>
        </tr>
      `;
      tableBody.innerHTML = emptyRow;
      if (mobileList) {
        mobileList.innerHTML = `
          <div class="empty-state" style="text-align: center; padding: 32px; color: var(--text-secondary);">
            No Offline Devices Found.
          </div>
        `;
      }
    } else {
      tableBody.innerHTML = offlineTrips.map(tripId => {
        const meta = DEVICES_METADATA[tripId];
        const tripState = state.trips[tripId];
        const customerName = meta.customer ? meta.customer.name : "Unassigned";
        const batteryVal = tripState.battery || 100;
        const lastOnline = tripState.lastOnlineTimestamp || "N/A";
        const locationName = tripState.locationName || "Unknown Landmark";

        return `
          <tr>
            <td><strong>${meta.name}</strong></td>
            <td><span style="font-family:var(--font-mono); font-size:0.75rem;">${meta.id}</span></td>
            <td><span class="fleet-card-plate">${meta.serialNumber}</span></td>
            <td>${customerName}</td>
            <td><span class="status-badge danger" style="padding: 2px 6px;">${batteryVal}%</span></td>
            <td>${locationName}</td>
            <td><span style="font-family:var(--font-mono); font-size:0.75rem;">${lastOnline}</span></td>
            <td><span class="status-badge offline">offline</span></td>
          </tr>
        `;
      }).join("");

      if (mobileList) {
        mobileList.innerHTML = offlineTrips.map(tripId => {
          const meta = DEVICES_METADATA[tripId];
          const tripState = state.trips[tripId];
          const customerName = meta.customer ? meta.customer.name : "Unassigned";
          const batteryVal = tripState.battery || 100;
          const lastOnline = tripState.lastOnlineTimestamp || "N/A";
          const locationName = tripState.locationName || "Unknown Landmark";

          return `
            <div class="mobile-history-card">
              <div class="mobile-history-header">
                <span class="mobile-history-device">${meta.name}</span>
                <span class="status-badge offline">offline</span>
              </div>
              <div class="mobile-history-details">
                <div><strong>Device ID:</strong> ${meta.id}</div>
                <div><strong>Serial:</strong> ${meta.serialNumber}</div>
                <div><strong>Customer:</strong> ${customerName}</div>
                <div><strong>Battery:</strong> ${batteryVal}%</div>
                <div><strong>Location:</strong> ${locationName}</div>
                <div style="grid-column: span 2; margin-top: 4px; border-top: 1px solid var(--border-color); padding-top: 4px;">
                  <strong>Last Online:</strong> ${lastOnline}
                </div>
              </div>
            </div>
          `;
        }).join("");
      }
    }
    lucide.createIcons();
  }

  // --- Reports & Analytics ---
  function renderReports() {
    const devices = Object.keys(DEVICES_METADATA);
    const customers = getUniqueCustomers();
    const maintenanceCount = devices.filter(tripId => state.trips[tripId].status === "maintenance").length;
    
    const alertsList = document.querySelector(".alerts-list");
    let alertCount = 3;
    if (alertsList) {
      alertCount = 0;
      alertsList.querySelectorAll(".alert-item").forEach(item => {
        if (item.style.display !== "none") {
          alertCount++;
        }
      });
    }

    const activeCountEl = document.getElementById("report-active-count");
    const customerCountEl = document.getElementById("report-customer-count");
    const maintenanceCountEl = document.getElementById("report-maintenance-count");
    
    if (activeCountEl) activeCountEl.textContent = devices.length;
    if (customerCountEl) customerCountEl.textContent = customers.length;
    if (maintenanceCountEl) maintenanceCountEl.textContent = maintenanceCount;
    
    const statBoxes = document.querySelectorAll("#view-reports .stat-box h2");
    if (statBoxes && statBoxes.length >= 4) {
      statBoxes[3].textContent = alertCount;
    }
  }

  // --- Customer Form Actions ---
  function showCustomerAddForm() {
    const formPanel = document.getElementById("customer-form-panel");
    const titleEl = document.getElementById("customer-form-title");
    const originalEmailEl = document.getElementById("edit-customer-original-email");
    const nameEl = document.getElementById("customer-name-input");
    const emailEl = document.getElementById("customer-email-input");
    const phoneEl = document.getElementById("customer-phone-input");
    
    if (formPanel && titleEl && originalEmailEl && nameEl && emailEl && phoneEl) {
      titleEl.textContent = "Add New Customer";
      originalEmailEl.value = "";
      nameEl.value = "";
      emailEl.value = "";
      phoneEl.value = "";
      
      formPanel.style.display = "block";
      nameEl.focus();
    }
  }

  function showCustomerEditForm(cust) {
    const formPanel = document.getElementById("customer-form-panel");
    const titleEl = document.getElementById("customer-form-title");
    const originalEmailEl = document.getElementById("edit-customer-original-email");
    const nameEl = document.getElementById("customer-name-input");
    const emailEl = document.getElementById("customer-email-input");
    const phoneEl = document.getElementById("customer-phone-input");
    
    if (formPanel && titleEl && originalEmailEl && nameEl && emailEl && phoneEl) {
      titleEl.textContent = "Edit Customer Details";
      originalEmailEl.value = cust.email;
      nameEl.value = cust.name;
      emailEl.value = cust.email;
      phoneEl.value = cust.phone;
      
      formPanel.style.display = "block";
      nameEl.focus();
    }
  }

  function handleCustomerFormSubmit(e) {
    e.preventDefault();
    
    const originalEmail = document.getElementById("edit-customer-original-email")?.value.trim();
    const name = document.getElementById("customer-name-input")?.value.trim();
    const email = document.getElementById("customer-email-input")?.value.trim();
    const phone = document.getElementById("customer-phone-input")?.value.trim();
    
    if (!name || !email || !phone) return;
    
    const overrides = JSON.parse(localStorage.getItem("gr_customer_overrides") || "{}");
    const newlyAdded = JSON.parse(localStorage.getItem("gr_newly_added_customers") || "[]");
    
    if (originalEmail) {
      const emailKey = originalEmail.toLowerCase();
      const newEmailKey = email.toLowerCase();
      
      const existingProfile = newlyAdded.find(c => c.email.toLowerCase() === emailKey) || {};
      const updatedProfile = {
        customerId: existingProfile.customerId || "CUST-0001",
        name: name,
        email: email,
        phone: phone,
        deviceCode: existingProfile.deviceCode || "DEV-0001",
        serialNumber: existingProfile.serialNumber || "SN-0001",
        avatar: overrides[emailKey]?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop"
      };
      
      delete overrides[emailKey];
      overrides[newEmailKey] = updatedProfile;
      localStorage.setItem("gr_customer_overrides", JSON.stringify(overrides));
      
      const idx = newlyAdded.findIndex(c => c.email.toLowerCase() === emailKey);
      if (idx !== -1) {
        newlyAdded[idx] = updatedProfile;
      }
      localStorage.setItem("gr_newly_added_customers", JSON.stringify(newlyAdded));
      
      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const cust = DEVICES_METADATA[tripId].customer;
        if (cust && cust.email && cust.email.toLowerCase() === emailKey) {
          DEVICES_METADATA[tripId].customer = updatedProfile;
        }
      });
      
      showToast("Customer Updated", `Updated details for ${name}.`, "success");

      // Sync with gr_user_accounts
      const userAccounts = getUserAccounts();
      const accIdx = userAccounts.findIndex(acc => acc.email.toLowerCase() === emailKey);
      if (accIdx !== -1) {
        userAccounts[accIdx].name = name;
        userAccounts[accIdx].email = email;
        userAccounts[accIdx].phone = phone;
        userAccounts[accIdx].deviceCode = updatedProfile.deviceCode;
        userAccounts[accIdx].serialNumber = updatedProfile.serialNumber;
      } else {
        userAccounts.push({
          name: name,
          email: email,
          phone: phone,
          deviceCode: updatedProfile.deviceCode,
          serialNumber: updatedProfile.serialNumber,
          password: "user123",
          status: "active"
        });
      }
      localStorage.setItem("gr_user_accounts", JSON.stringify(userAccounts));
      savePersistedAssignments();
      
    } else {
      const emailKey = email.toLowerCase();
      const unique = getUniqueCustomers();
      if (unique.some(c => c.email.toLowerCase() === emailKey)) {
        showToast("Error", "A customer with this email address already exists.", "danger");
        return;
      }
      
      // Auto-generate identifiers
      const custIndex = getNextCustomerIndex();
      const nextCustId = `CUST-${String(custIndex).padStart(4, '0')}`;
      
      const devIndex = getNextDeviceIndex();
      const nextDevId = `DEV-${String(devIndex).padStart(4, '0')}`;
      const nextSerial = `SN-${String(devIndex).padStart(4, '0')}`;
      
      const newProfile = {
        customerId: nextCustId,
        name: name,
        email: email,
        phone: phone,
        deviceCode: nextDevId,
        serialNumber: nextSerial,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop"
      };
      
      newlyAdded.push(newProfile);
      localStorage.setItem("gr_newly_added_customers", JSON.stringify(newlyAdded));
      
      // Register a new trackable device in DEVICES_METADATA
      const newTripId = `trip-new-${devIndex}`;
      DEVICES_METADATA[newTripId] = {
        name: `Device ${nextDevId}`,
        id: nextDevId,
        serialNumber: nextSerial,
        category: "Equipment",
        status: "assigned",
        purchaseDate: new Date().toISOString().split('T')[0],
        rentalDate: new Date().toISOString().split('T')[0],
        warrantyStatus: "Active",
        purchaseHistory: "System auto-generated register.",
        rentalHistory: `Auto-assigned to customer ${name} on creation.`,
        locationNames: ["HITEC City Mall", "Madhapur Metro", "Jubilee Hills Road", "Banjara Hills Rd 12", "Panjagutta Junction", "Begumpet Airport", "Secunderabad Junction"],
        customer: {
          customerId: nextCustId,
          name: name,
          email: email,
          phone: phone,
          avatar: newProfile.avatar
        },
        activityLogs: [
          "Device auto-generated and registered in system.",
          `Assigned to customer ${name} (${nextCustId}).`
        ]
      };
      
      // Setup simulator state
      state.trips[newTripId] = {
        currentStepIndex: 0,
        elapsedSeconds: 0,
        battery: 100,
        locationName: "HITEC City Mall",
        status: "assigned"
      };
      
      // Link route waypoints
      TRIP_WAYPOINTS[newTripId] = TRIP_WAYPOINTS["trip-1"];
      INTERPOLATED_TRIPS[newTripId] = INTERPOLATED_TRIPS["trip-1"];
      
      savePersistedAssignments();
      showToast("Customer Added", `Created profile for ${name} with ID ${nextCustId}.`, "success");
 
      // Sync with gr_user_accounts
      const userAccounts = getUserAccounts();
      userAccounts.push({
        name: name,
        email: email,
        phone: phone,
        deviceCode: nextDevId,
        serialNumber: nextSerial,
        password: "user123",
        status: "active"
      });
      localStorage.setItem("gr_user_accounts", JSON.stringify(userAccounts));

      // Show credentials summary modal to admin
      const summaryModal = document.getElementById("customer-summary-modal");
      if (summaryModal) {
        document.getElementById("summary-cust-name").textContent = name;
        document.getElementById("summary-cust-email").textContent = email;
        document.getElementById("summary-cust-phone").textContent = phone;
        document.getElementById("summary-device-name").textContent = `Device ${nextDevId}`;
        document.getElementById("summary-serial-number").textContent = nextSerial;
        document.getElementById("summary-device-code").textContent = nextDevId;
        document.getElementById("summary-login-username").textContent = email;
        document.getElementById("summary-login-code").textContent = nextDevId;
        
        summaryModal.style.display = "flex";
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    }
    
    const formPanel = document.getElementById("customer-form-panel");
    if (formPanel) formPanel.style.display = "none";
    
    renderCustomersGrid();
    renderAssignments();
    renderDevicesInventoryTable();
    renderFleetCardsList();
    drawMapLayers();
  }

  // --- Dynamic History System ---
  function renderHistory() {
    const isAdmin = isAdminSession();
    const activeEmail = getActiveCustomerEmail();
    
    const historyEvents = [
      { dateTime: "2026-06-14 18:24", txId: "TX-9021", deviceName: "Laptop L22", holder: "Devon Lane", email: "devon.lane@outlook.com", duration: "12 Months", warranty: "Active", status: "Returned", badgeClass: "available" },
      { dateTime: "2026-06-14 14:10", txId: "TX-8841", deviceName: "Projector P15", holder: "Sarah Connor", email: "s.connor@cyberdyne.com", duration: "3 Months", warranty: "Active", status: "Returned", badgeClass: "available" },
      { dateTime: "2026-06-13 22:05", txId: "TX-7491", deviceName: "Smart Lamp A01", holder: "Marcus Wright", email: "m.wright@resistance.net", duration: "6 Months", warranty: "Active", status: "Assigned", badgeClass: "assigned" },
      { dateTime: "2026-06-12 11:15", txId: "TX-6804", deviceName: "GPS Tracker G08", holder: "Lisa Simpson", email: "lisa.s@springfield.org", duration: "12 Months", warranty: "Expired", status: "Missing", badgeClass: "missing" }
    ];
    
    const filteredEvents = historyEvents.filter(evt => {
      if (isAdmin) return true;
      if (!activeEmail) return false;
      return evt.email.toLowerCase() === activeEmail.toLowerCase();
    });
    
    const tableBody = document.querySelector("#view-history tbody");
    if (tableBody) {
      if (filteredEvents.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; padding: 32px; color: var(--text-secondary);">
              No history records found.
            </td>
          </tr>
        `;
      } else {
        tableBody.innerHTML = filteredEvents.map(evt => {
          return `
            <tr>
              <td>${evt.dateTime}</td>
              <td>${evt.txId}</td>
              <td>${evt.deviceName}</td>
              <td>${evt.holder}</td>
              <td>${evt.duration}</td>
              <td>${evt.warranty}</td>
              <td><span class="status-badge ${evt.badgeClass}">${evt.status}</span></td>
            </tr>
          `;
        }).join("");
      }
    }
    
    renderMobileHistory();
  }

  // --- Local Assignments and Overrides Persistence ---
  function loadPersistedCustomerOverrides() {
    const overrides = localStorage.getItem("gr_customer_overrides");
    if (overrides) {
      try {
        const parsed = JSON.parse(overrides);
        Object.keys(DEVICES_METADATA).forEach(tripId => {
          const cust = DEVICES_METADATA[tripId].customer;
          if (cust && cust.email && parsed[cust.email.toLowerCase()]) {
            DEVICES_METADATA[tripId].customer = parsed[cust.email.toLowerCase()];
          }
        });
      } catch (e) {
        console.error("Failed loading customer overrides", e);
      }
    }
  }

  function loadPersistedAssignments() {
    const saved = localStorage.getItem("gr_device_assignments");
    if (saved) {
      try {
        const assignments = JSON.parse(saved);
        Object.keys(assignments).forEach(tripId => {
          if (DEVICES_METADATA[tripId]) {
            DEVICES_METADATA[tripId].customer = assignments[tripId].customer;
            DEVICES_METADATA[tripId].status = assignments[tripId].status;
            if (state.trips[tripId]) {
              state.trips[tripId].status = assignments[tripId].status;
            }
          } else if (tripId.startsWith("trip-new-")) {
            // Reconstruct dynamic device!
            const idxStr = tripId.replace("trip-new-", "");
            const devId = `DEV-${idxStr.padStart(4, '0')}`;
            const serial = `SN-${idxStr.padStart(4, '0')}`;
            
            const savedCust = assignments[tripId].customer;
            const savedStatus = assignments[tripId].status || "assigned";
            
            DEVICES_METADATA[tripId] = {
              name: `Device ${devId}`,
              id: devId,
              serialNumber: serial,
              category: "Equipment",
              status: savedStatus,
              purchaseDate: new Date().toISOString().split('T')[0],
              rentalDate: new Date().toISOString().split('T')[0],
              warrantyStatus: "Active",
              purchaseHistory: "System auto-generated register.",
              rentalHistory: savedCust ? `Auto-assigned to customer ${savedCust.name} on creation.` : "Unassigned",
              locationNames: ["HITEC City Mall", "Madhapur Metro", "Jubilee Hills Road", "Banjara Hills Rd 12", "Panjagutta Junction", "Begumpet Airport", "Secunderabad Junction"],
              customer: savedCust,
              activityLogs: [
                "Device auto-generated and registered in system.",
                savedCust ? `Assigned to customer ${savedCust.name} (${savedCust.customerId}).` : "Unassigned"
              ]
            };
            
            state.trips[tripId] = {
              currentStepIndex: 0,
              elapsedSeconds: 0,
              battery: 100,
              locationName: "HITEC City Mall",
              status: savedStatus
            };

            // Link route waypoints
            TRIP_WAYPOINTS[tripId] = TRIP_WAYPOINTS["trip-1"];
            INTERPOLATED_TRIPS[tripId] = INTERPOLATED_TRIPS["trip-1"];
          }
        });
      } catch (e) {
        console.error("Failed parsing persisted assignments", e);
      }
    }

    const savedReports = localStorage.getItem("gr_reports_history");
    if (savedReports) {
      try {
        state.reportsHistory = JSON.parse(savedReports);
      } catch (e) {
        console.error("Failed loading reports history", e);
      }
    }

    const savedMaint = localStorage.getItem("gr_maintenance_history");
    if (savedMaint) {
      try {
        state.maintenanceHistory = JSON.parse(savedMaint);
      } catch (e) {
        console.error("Failed loading maintenance history", e);
      }
    }
  }

  function savePersistedAssignments() {
    const assignments = {};
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      assignments[tripId] = {
        customer: DEVICES_METADATA[tripId].customer,
        status: DEVICES_METADATA[tripId].status
      };
    });
    localStorage.setItem("gr_device_assignments", JSON.stringify(assignments));
    localStorage.setItem("gr_reports_history", JSON.stringify(state.reportsHistory));
    localStorage.setItem("gr_maintenance_history", JSON.stringify(state.maintenanceHistory));
  }

  // --- Dynamic Telemetry update helper ---
  function updateTelemetryUIElements() {
    if (!state.activeTripId) return;
    
    const tripId = state.activeTripId;
    const tripState = state.trips[tripId];
    const meta = DEVICES_METADATA[tripId];
    
    if (DOM.statSpeed) DOM.statSpeed.textContent = `${tripState.battery}%`;
    if (DOM.statDistance) DOM.statDistance.textContent = meta.warrantyStatus;
    if (DOM.statEta) DOM.statEta.textContent = meta.purchaseDate;
    if (DOM.statDuration) DOM.statDuration.textContent = meta.rentalDate || "N/A";
    if (DOM.statLocation) DOM.statLocation.textContent = tripState.locationName;
    
    if (DOM.trackingVehicleStatus) {
      DOM.trackingVehicleStatus.textContent = tripState.status;
      DOM.trackingVehicleStatus.className = `status-badge ${tripState.status}`;
    }

    const mobLoc = document.getElementById("mobile-compact-location");
    if (mobLoc) mobLoc.textContent = tripState.locationName;
  }

  // --- Theme Toggle ---
  function toggleTheme() {
    const isNowDark = document.body.classList.contains("theme-dark");
    const newTheme = isNowDark ? "theme-light" : "theme-dark";
    document.body.className = newTheme;
    state.theme = newTheme;
    localStorage.setItem("gr_theme", newTheme);
    updateThemeIcons();
  }

  function updateThemeIcons() {
    const isDark = document.body.classList.contains("theme-dark");
    // Desktop toggle
    const appBtn = document.getElementById("theme-toggle-app");
    if (appBtn) {
      const sun = appBtn.querySelector(".sun-icon");
      const moon = appBtn.querySelector(".moon-icon");
      if (sun) sun.style.display = isDark ? "inline-block" : "none";
      if (moon) moon.style.display = isDark ? "none" : "inline-block";
    }
    // Mobile toggle
    const mobileBtn = document.getElementById("mobile-theme-toggle");
    if (mobileBtn) {
      const sun = mobileBtn.querySelector(".sun-icon");
      const moon = mobileBtn.querySelector(".moon-icon");
      if (sun) sun.style.display = isDark ? "inline-block" : "none";
      if (moon) moon.style.display = isDark ? "none" : "inline-block";
    }
  }

  // --- Add Event Listeners ---
  function setupEventListeners() {
    // Global image error fallback handler (e.g. for offline usage)
    window.addEventListener("error", function (e) {
      if (e.target && e.target.tagName === "IMG") {
        const fallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b949e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>";
        if (e.target.src !== fallback) {
          e.target.src = fallback;
        }
      }
    }, true);

    // Theme switches
    if (DOM.themeToggleLogin) DOM.themeToggleLogin.addEventListener("click", toggleTheme);
    if (DOM.themeToggleApp) DOM.themeToggleApp.addEventListener("click", toggleTheme);
    if (DOM.mobileThemeToggle) DOM.mobileThemeToggle.addEventListener("click", toggleTheme);

    // ---- Login Access Role Toggle: User / Admin ----
    const btnLoginRoleUser = document.getElementById("btn-login-role-user");
    const btnLoginRoleAdmin = document.getElementById("btn-login-role-admin");
    const loginAccountRoleInput = document.getElementById("login-account-role");

    if (btnLoginRoleUser && btnLoginRoleAdmin && loginAccountRoleInput) {
      const loginDeviceLabel = document.getElementById("login-device-code-label");
      const loginDeviceInput = document.getElementById("login-device-code");
      
      btnLoginRoleUser.addEventListener("click", () => {
        btnLoginRoleUser.classList.add("active");
        btnLoginRoleAdmin.classList.remove("active");
        loginAccountRoleInput.value = "user";
        if (loginDeviceLabel) loginDeviceLabel.textContent = "Device Code";
        if (loginDeviceInput) loginDeviceInput.placeholder = "e.g. DEV-0001 or SN-0001";
      });

      btnLoginRoleAdmin.addEventListener("click", () => {
        btnLoginRoleAdmin.classList.add("active");
        btnLoginRoleUser.classList.remove("active");
        loginAccountRoleInput.value = "admin";
        if (loginDeviceLabel) loginDeviceLabel.textContent = "Admin Access Code (Optional)";
        if (loginDeviceInput) loginDeviceInput.placeholder = "e.g. ADMIN-SECURE (optional)";
      });
    }

    // Login Form Submit Check
    if (DOM.loginForm) DOM.loginForm.addEventListener("submit", handleLoginSubmit);

    // Password Eye Toggler (Login)
    if (DOM.passwordToggle) DOM.passwordToggle.addEventListener("click", togglePasswordVisibility);

    // ---- Auth View Switching: Login <-> Sign Up ----
    const linkToSignup = document.getElementById("link-to-signup");
    const linkToLogin  = document.getElementById("link-to-login");
    const loginSection  = document.getElementById("login-view-section");
    const signupSection = document.getElementById("signup-view-section");

    if (linkToSignup) {
      linkToSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.style.display  = "none";
        signupSection.style.display = "block";
        // Re-trigger animation
        signupSection.classList.remove("auth-anim");
        void signupSection.offsetWidth;
        signupSection.classList.add("auth-anim");
        lucide.createIcons();
      });
    }

    if (linkToLogin) {
      linkToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupSection.style.display = "none";
        loginSection.style.display  = "block";
        lucide.createIcons();
      });
    }

    // ---- Account Type Toggle: Individual / Company ----
    document.querySelectorAll(".type-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const type = btn.getAttribute("data-type");
        const accountTypeInput = document.getElementById("signup-account-type");
        if (accountTypeInput) accountTypeInput.value = type;

        const companyGroup = document.getElementById("company-name-group");
        const lblName  = document.getElementById("lbl-signup-fullname");
        const lblEmail = document.getElementById("lbl-signup-email");
        const lblPhone = document.getElementById("lbl-signup-phone");
        const nameInput  = document.getElementById("signup-fullname");
        const emailInput = document.getElementById("signup-email");
        const phoneInput = document.getElementById("signup-phone");

        if (type === "company") {
          if (companyGroup) companyGroup.style.display = "flex";
          if (lblName)  lblName.textContent  = "Contact Person Name";
          if (lblEmail) lblEmail.textContent = "Company Email";
          if (lblPhone) lblPhone.textContent = "Company Phone Number";
          if (nameInput)  nameInput.placeholder  = "e.g. John Smith";
          if (emailInput) emailInput.placeholder = "e.g. info@company.com";
          if (phoneInput) phoneInput.placeholder = "e.g. +91 99887 77665";
        } else {
          if (companyGroup) companyGroup.style.display = "none";
          if (lblName)  lblName.textContent  = "Full Name";
          if (lblEmail) lblEmail.textContent = "Email Address";
          if (lblPhone) lblPhone.textContent = "Mobile Number";
          if (nameInput)  nameInput.placeholder  = "e.g. Sarah Connor";
          if (emailInput) emailInput.placeholder = "e.g. s.connor@cyberdyne.com";
          if (phoneInput) phoneInput.placeholder = "e.g. +91 81234 56789";
        }
      });
    });

    // ---- Sign Up Password Eye Togglers ----
    document.querySelectorAll(".signup-pass-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPass = input.type === "password";
        input.type = isPass ? "text" : "password";
        const eyeOpen   = btn.querySelector(".eye-open-icon");
        const eyeClosed = btn.querySelector(".eye-closed-icon");
        if (eyeOpen)   eyeOpen.style.display   = isPass ? "none"  : "block";
        if (eyeClosed) eyeClosed.style.display = isPass ? "block" : "none";
      });
    });

    // ---- Sign Up Form Submission ----
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
      signupForm.addEventListener("submit", handleSignupSubmit);
    }



    // Customer Add Button
    const btnShowAddCustomer = document.getElementById("btn-show-add-customer");
    if (btnShowAddCustomer) {
      btnShowAddCustomer.addEventListener("click", showCustomerAddForm);
    }
    
    // Customer Cancel Edit Button
    const btnCancelCustomerEdit = document.getElementById("btn-cancel-customer-edit");
    if (btnCancelCustomerEdit) {
      btnCancelCustomerEdit.addEventListener("click", () => {
        const formPanel = document.getElementById("customer-form-panel");
        if (formPanel) formPanel.style.display = "none";
      });
    }

    // Customer Form Submission
    const customerEditorForm = document.getElementById("customer-editor-form");
    if (customerEditorForm) {
      customerEditorForm.addEventListener("submit", handleCustomerFormSubmit);
    }

    // Assignments Form Submission
    const assignmentForm = document.getElementById("assignment-form");
    if (assignmentForm) {
      assignmentForm.addEventListener("submit", handleAssignmentSubmit);
    }

    // Top navigation tabs switching
    document.querySelectorAll(".nav-menu-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const tabId = item.getAttribute("data-tab");
        switchTab(tabId);
      });
    });

    // Close drawer overlay modals
    document.querySelectorAll(".btn-close-drawer").forEach(btn => {
      btn.addEventListener("click", () => {
        const drawerId = btn.getAttribute("data-close-drawer");
        const drawer = document.getElementById(`view-${drawerId}`);
        if (drawer) {
          drawer.style.display = "none";
        }
        switchTab("live-tracking");
      });
    });

    // Left Collapsible Fleet Panel toggle
    if (DOM.btnToggleFleetPanel && DOM.floatingFleetPanel) {
      DOM.btnToggleFleetPanel.addEventListener("click", () => {
        DOM.floatingFleetPanel.classList.toggle("collapsed");
        const isCollapsed = DOM.floatingFleetPanel.classList.contains("collapsed");
        
        const collapseIcon = DOM.btnToggleFleetPanel.querySelector(".collapse-icon");
        const expandIcon = DOM.btnToggleFleetPanel.querySelector(".expand-icon");
        
        if (collapseIcon && expandIcon) {
          if (isCollapsed) {
            collapseIcon.style.display = "none";
            expandIcon.style.display = "block";
          } else {
            collapseIcon.style.display = "block";
            expandIcon.style.display = "none";
          }
        }
      });
    }



    // WhatsApp Redirect on Chat with Holder Click
    if (DOM.btnToggleChat) {
      DOM.btnToggleChat.addEventListener("click", () => {
        if (!state.activeTripId) return;
        const meta = DEVICES_METADATA[state.activeTripId];
        const customer = meta ? meta.customer : null;
        if (!customer) {
          showToast("Contact Error", "Contact information is not available.", "danger");
          return;
        }
        openWhatsAppChat(customer.phone);
      });
    }

    // Call Holder Click - Opens Custom Modal Dialer / Desktop View
    if (DOM.btnCallDriver) {
      // Prevent default link routing
      DOM.btnCallDriver.addEventListener("click", (e) => {
        e.preventDefault();
        if (!state.activeTripId) return;
        const meta = DEVICES_METADATA[state.activeTripId];
        const customer = meta ? meta.customer : null;
        
        if (!customer || !customer.phone) {
          showToast("Contact Error", "Contact information is not available.", "danger");
          return;
        }
        
        // Hydrate Dialer Modal views (Name, Phone, Email, Avatar)
        const dialerAvatar = document.getElementById("dialer-holder-avatar");
        const dialerName = document.getElementById("dialer-holder-name");
        const dialerPhone = document.getElementById("dialer-phone-number");
        const dialerStatus = document.getElementById("dialer-status");
        
        const deskAvatar = document.getElementById("desktop-call-avatar");
        const deskName = document.getElementById("desktop-call-name");
        const deskEmail = document.getElementById("desktop-call-email");
        const deskPhone = document.getElementById("desktop-call-phone");
        const deskLink = document.getElementById("btn-desktop-call-link");
        
        const fallbackAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b949e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>";
        
        if (dialerAvatar) dialerAvatar.src = customer.avatar || fallbackAvatar;
        if (dialerName) dialerName.textContent = customer.name;
        if (dialerPhone) dialerPhone.textContent = customer.phone;
        if (dialerStatus) dialerStatus.textContent = "Ready to Call";
        
        if (deskAvatar) deskAvatar.src = customer.avatar || fallbackAvatar;
        if (deskName) deskName.textContent = customer.name;
        if (deskEmail) deskEmail.textContent = customer.email || "N/A";
        if (deskPhone) deskPhone.textContent = customer.phone;
        if (deskLink) deskLink.href = `tel:${customer.phone}`;
        
        // Check Device Type
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
        const mobileView = document.getElementById("call-mobile-view");
        const desktopView = document.getElementById("call-desktop-view");
        
        if (isMobile) {
          if (mobileView) mobileView.style.display = "flex";
          if (desktopView) desktopView.style.display = "none";
        } else {
          if (mobileView) mobileView.style.display = "none";
          if (desktopView) desktopView.style.display = "flex";
        }
        
        // Show Call Modal Overlay
        const callModal = document.getElementById("call-modal");
        if (callModal) {
          callModal.style.display = "flex";
          // Re-create icons inside modal
          if (window.lucide) window.lucide.createIcons();
        }
      });
    }

    // Close Call Modal Events
    const callModal = document.getElementById("call-modal");
    const closeCallModalBtn = document.getElementById("btn-close-call-modal");
    const dialerCancelBtn = document.getElementById("btn-dialer-cancel");
    const desktopCallCancelBtn = document.getElementById("btn-desktop-call-cancel");
    
    function closeCallModal() {
      if (callModal) callModal.style.display = "none";
    }
    
    if (closeCallModalBtn) closeCallModalBtn.addEventListener("click", closeCallModal);
    if (dialerCancelBtn) dialerCancelBtn.addEventListener("click", closeCallModal);
    if (desktopCallCancelBtn) desktopCallCancelBtn.addEventListener("click", closeCallModal);
    
    if (callModal) {
      callModal.addEventListener("click", (e) => {
        if (e.target === callModal) {
          closeCallModal();
        }
      });
    }

    // Close Customer Onboarding Summary Modal
    const summaryModal = document.getElementById("customer-summary-modal");
    const closeSummaryModalBtn = document.getElementById("btn-close-summary-modal");
    if (closeSummaryModalBtn && summaryModal) {
      closeSummaryModalBtn.addEventListener("click", () => {
        summaryModal.style.display = "none";
      });
      summaryModal.addEventListener("click", (e) => {
        if (e.target === summaryModal) {
          summaryModal.style.display = "none";
        }
      });
    }

    // Mobile Dialer Call Button Click
    const dialerCallBtn = document.getElementById("btn-dialer-call");
    if (dialerCallBtn) {
      dialerCallBtn.addEventListener("click", () => {
        if (!state.activeTripId) return;
        const meta = DEVICES_METADATA[state.activeTripId];
        const customer = meta ? meta.customer : null;
        if (!customer || !customer.phone) return;
        
        const dialerStatus = document.getElementById("dialer-status");
        if (dialerStatus) {
          dialerStatus.textContent = "Calling...";
          dialerStatus.style.color = "var(--accent)";
        }
        
        setTimeout(() => {
          window.location.href = `tel:${customer.phone}`;
        }, 800);
      });
    }
    
    // Add active feedback styling/keypresses for dialer keys
    document.querySelectorAll(".dial-key").forEach(key => {
      key.addEventListener("click", () => {
        key.style.backgroundColor = "var(--primary-glow)";
        setTimeout(() => {
          key.style.backgroundColor = "";
        }, 150);
      });
    });

    if (DOM.btnCloseChat && DOM.floatingChatPopup) {
      DOM.btnCloseChat.addEventListener("click", () => {
        DOM.floatingChatPopup.style.display = "none";
      });
    }

    // Search and Status filters keypresses
    if (DOM.fleetSearch) {
      DOM.fleetSearch.addEventListener("keyup", (e) => {
        state.searchQuery = e.target.value.trim();
        renderFleetCardsList();
      });
    }

    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        state.statusFilter = chip.getAttribute("data-filter");
        renderFleetCardsList();
      });
    });

    // Return to fleet overview list btn (Stop Tracking)
    if (DOM.backToFleetBtn) {
      DOM.backToFleetBtn.addEventListener("click", () => {
        stopTrackingVehicle();
      });
    }

    // Simulation play pause toggle
    if (DOM.btnPlayPause) {
      DOM.btnPlayPause.addEventListener("click", () => {
        state.isPaused = !state.isPaused;
        
        // Post control message to simulator
        if (broadcastChannel) {
          broadcastChannel.postMessage({
            type: 'control',
            command: state.isPaused ? 'pause' : 'resume',
            tripId: state.activeTripId
          });
        }
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
          firebase.database().ref(`controls/${state.activeTripId}`).set({
            command: state.isPaused ? 'pause' : 'resume',
            timestamp: Date.now()
          });
        }

        if (state.isPaused) {
          if (DOM.playPauseIcon) DOM.playPauseIcon.setAttribute("data-lucide", "play");
          if (DOM.playPauseText) DOM.playPauseText.textContent = "Resume Trip";
          DOM.btnPlayPause.className = "btn btn-secondary btn-sm";
          showToast("Simulation Paused", "Simulated vehicle movements suspended.", "info");
        } else {
          if (DOM.playPauseIcon) DOM.playPauseIcon.setAttribute("data-lucide", "pause");
          if (DOM.playPauseText) DOM.playPauseText.textContent = "Pause Trip";
          DOM.btnPlayPause.className = "btn btn-primary btn-sm";
          showToast("Simulation Resumed", "Vehicle location tracking active.", "success");
        }
        lucide.createIcons();
      });
    }

    if (DOM.btnResetTrip) {
      DOM.btnResetTrip.addEventListener("click", () => {
        if (!state.activeTripId) return;
        const tripId = state.activeTripId;
        
        // Post control message to simulator
        if (broadcastChannel) {
          broadcastChannel.postMessage({
            type: 'control',
            command: 'reset',
            tripId: tripId
          });
        }
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
          firebase.database().ref(`controls/${tripId}`).set({
            command: 'reset',
            timestamp: Date.now()
          });
        }

        showToast("Trip Reset", "Sent reset command to vehicle GPS simulator.", "info");
      });
    }

    // Speed multiplier slider
    if (DOM.speedMultiplierRange) {
      DOM.speedMultiplierRange.addEventListener("input", (e) => {
        state.speedMultiplier = parseInt(e.target.value);
        if (DOM.speedMultiplierText) DOM.speedMultiplierText.textContent = `${state.speedMultiplier}x Speed`;
      });
    }

    // Centering Map Follow toggle
    if (DOM.btnLockCar) {
      DOM.btnLockCar.addEventListener("click", () => {
        state.lockMap = !state.lockMap;
        if (state.lockMap) {
          DOM.btnLockCar.classList.add("active");
          recenterMap(false);
        } else {
          DOM.btnLockCar.classList.remove("active");
        }
      });
    }

    // Chat submit correspondence form
    if (DOM.chatForm) {
      DOM.chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = DOM.chatInput.value.trim();
        if (!text || !state.activeTripId) return;

        addChatBubble(text, "user");
        DOM.chatInput.value = "";

        // Simulated customer response
        setTimeout(() => {
          handleCustomerResponseToUser(text);
        }, 1500);
      });
    }

    // --- Device Security Center (Mark as Missing) trigger logic ---
    if (DOM.btnSosTrigger) {
      DOM.btnSosTrigger.addEventListener("click", () => {
        if (!state.activeTripId) return;
        const tripId = state.activeTripId;
        const meta = DEVICES_METADATA[tripId];
        const tripState = state.trips[tripId];

        if (tripState.status === "missing") {
          // Recover the device directly!
          const origStatus = DEVICES_METADATA[tripId].status === "missing" ? "assigned" : DEVICES_METADATA[tripId].status;
          tripState.status = origStatus;
          
          meta.activityLogs.unshift(`INFO: Device marked recovered.`);
          showToast("Device Recovered", `${meta.name} status reverted to ${origStatus}.`, "success");
          addChatBubble(`System Alert: Device marked recovered. Re-establishing standard tracking vectors.`, "system");

          // Hide the missing alert banner in alert list if it exists
          const alertItem = document.getElementById("alert-item-missing-dev");
          if (alertItem) alertItem.style.display = "none";

          // Sync with simulator
          if (broadcastChannel) {
            broadcastChannel.postMessage({
              type: 'control',
              command: 'recover',
              tripId: tripId
            });
          }
          if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
            firebase.database().ref(`controls/${tripId}`).set({
              command: 'recover',
              timestamp: Date.now()
            });
          }

          // Refresh display
          showActiveTrackingPanel();
          drawMapLayers();
          renderFleetCardsList();
        } else {
          // Open Missing Modal
          if (DOM.sosDriverName) DOM.sosDriverName.textContent = meta.name;
          if (DOM.sosPlate) DOM.sosPlate.textContent = meta.serialNumber;
          if (DOM.sosVehicleName) DOM.sosVehicleName.textContent = meta.customer ? `${meta.customer.name} (${meta.customer.phone})` : "No Assigned Holder";
          if (DOM.sosLocation) DOM.sosLocation.textContent = tripState.locationName;
          if (DOM.sosModal) DOM.sosModal.style.display = "flex";
        }
      });
    }

    if (DOM.btnCancelSos) {
      DOM.btnCancelSos.addEventListener("click", () => {
        if (DOM.sosModal) DOM.sosModal.style.display = "none";
      });
    }

    if (DOM.btnConfirmSos) {
      DOM.btnConfirmSos.addEventListener("click", () => {
        if (DOM.sosModal) DOM.sosModal.style.display = "none";
        
        const tripId = state.activeTripId;
        const meta = DEVICES_METADATA[tripId];
        const tripState = state.trips[tripId];
        
        tripState.status = "missing";
        meta.activityLogs.unshift(`SECURITY ALERT: Device flagged as missing.`);
        
        // Append System alert message to customer chat log
        addChatBubble(`System WARNING: Device reported as lost/missing. Security lock protocol active.`, "system");
        showToast("Asset Flagged Missing", "Device status updated to missing.", "danger");

        // Show the alert in Alerts drawer
        const alertItem = document.getElementById("alert-item-missing-dev");
        if (alertItem) {
          alertItem.style.display = "flex";
          const alertTitle = document.getElementById("alert-title-missing-dev");
          const alertDesc = document.getElementById("alert-desc-missing-dev");
          if (alertTitle) alertTitle.textContent = `${meta.name} flagged as Missing`;
          if (alertDesc) alertDesc.textContent = `Asset SN: ${meta.serialNumber} is missing. Security protocol active.`;
        }

        // Sync with simulator
        if (broadcastChannel) {
          broadcastChannel.postMessage({
            type: 'control',
            command: 'missing',
            tripId: tripId
          });
        }
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
          firebase.database().ref(`controls/${tripId}`).set({
            command: 'missing',
            timestamp: Date.now()
          });
        }

        // Refresh display
        showActiveTrackingPanel();
        drawMapLayers();
        renderFleetCardsList();
      });
    }
    
    // Map container event delegation for Track buttons in popups
    const mapEl = document.getElementById("map");
    if (mapEl) {
      mapEl.addEventListener("click", (e) => {
        const trackBtn = e.target.closest(".popup-track-btn");
        if (trackBtn) {
          const tripId = trackBtn.getAttribute("data-trip-id");
          startTrackingVehicle(tripId);
        }
      });
    }

    // Collapsible search-filters toggle button
    const btnFilterToggle = document.getElementById("btn-filter-toggle");
    const floatingFleetPanel = document.getElementById("floating-fleet-panel");
    if (btnFilterToggle && floatingFleetPanel) {
      btnFilterToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        floatingFleetPanel.classList.toggle("mobile-expanded");
        
        const filterIcon = btnFilterToggle.querySelector(".filter-icon");
        const chevronUpIcon = btnFilterToggle.querySelector(".chevron-up-icon");
        const isExpanded = floatingFleetPanel.classList.contains("mobile-expanded");
        if (filterIcon && chevronUpIcon) {
          if (isExpanded) {
            filterIcon.style.display = "none";
            chevronUpIcon.style.display = "block";
          } else {
            filterIcon.style.display = "block";
            chevronUpIcon.style.display = "none";
          }
        }
      });
    }

    // Mobile header notification click
    const mobNotifyBtn = document.getElementById("mobile-notification-btn");
    if (mobNotifyBtn) {
      mobNotifyBtn.addEventListener("click", () => {
        switchTab("alerts");
      });
    }

    // Mobile header profile avatar click (toggles theme)
    const mobProfileBtn = document.getElementById("mobile-profile-btn");
    if (mobProfileBtn) {
      mobProfileBtn.addEventListener("click", () => {
        toggleTheme();
      });
    }

    // Clean inline transforms if window is resized to desktop width
    window.addEventListener("resize", () => {
      const panel = document.getElementById("floating-telemetry-panel");
      if (!panel) return;
      if (window.innerWidth > 768) {
        panel.style.transform = "none";
        panel.classList.remove("expanded");
      } else {
        if (state.activeTripId && state.isTrackingActive) {
          if (isSheetExpanded) {
            expandBottomSheet();
          } else {
            collapseBottomSheet();
          }
        }
      }
    });

    // Active tracking panel: View Devices button click listener
    if (DOM.btnViewHolderDevices) {
      DOM.btnViewHolderDevices.addEventListener("click", () => {
        if (!state.activeTripId) return;
        const meta = DEVICES_METADATA[state.activeTripId];
        if (meta && meta.customer && meta.customer.email) {
          state.selectedCustomerEmail = meta.customer.email;
          switchTab("devices");
        }
      });
    }

    // Settings sub-tab click listeners
    document.querySelectorAll(".settings-tabs-bar .tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const subTabId = btn.getAttribute("data-settings-tab");
        switchSettingsTab(subTabId);
      });
    });

    // Settings General form save handler
    const generalForm = document.getElementById("settings-general-form");
    if (generalForm) {
      generalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedName = document.getElementById("sett-profile-name")?.value || "";
        const updatedPhone = document.getElementById("sett-profile-phone")?.value || "";
        localStorage.setItem("gr_signup_name", updatedName);
        localStorage.setItem("gr_signup_phone", updatedPhone);

        const loggedInEmail = localStorage.getItem("gr_logged_in_email") || "";
        const isAdmin = isAdminSession();
        
        if (!isAdmin && loggedInEmail) {
          // Sync with gr_user_accounts
          const userAccounts = getUserAccounts();
          const accIdx = userAccounts.findIndex(acc => acc.email.toLowerCase() === loggedInEmail.toLowerCase());
          if (accIdx !== -1) {
            userAccounts[accIdx].name = updatedName;
            userAccounts[accIdx].phone = updatedPhone;
            localStorage.setItem("gr_user_accounts", JSON.stringify(userAccounts));
          }
          
          // Sync with gr_newly_added_customers
          const newlyAdded = JSON.parse(localStorage.getItem("gr_newly_added_customers") || "[]");
          const newlyIdx = newlyAdded.findIndex(c => c.email.toLowerCase() === loggedInEmail.toLowerCase());
          if (newlyIdx !== -1) {
            newlyAdded[newlyIdx].name = updatedName;
            newlyAdded[newlyIdx].phone = updatedPhone;
            localStorage.setItem("gr_newly_added_customers", JSON.stringify(newlyAdded));
          }

          // Sync with DEVICES_METADATA customer profile
          Object.keys(DEVICES_METADATA).forEach(tripId => {
            const cust = DEVICES_METADATA[tripId].customer;
            if (cust && cust.email && cust.email.toLowerCase() === loggedInEmail.toLowerCase()) {
              cust.name = updatedName;
              cust.phone = updatedPhone;
            }
          });
          
          savePersistedAssignments();
        }

        showToast("Profile Updated", "Your console profile changes have been saved successfully.", "success");
      });
    }

    // Settings Security form save handler
    const securityForm = document.getElementById("settings-security-form");
    if (securityForm) {
      securityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const curPass = document.getElementById("sett-security-current-pass")?.value || "";
        const newPass = document.getElementById("sett-security-new-pass")?.value || "";
        const confPass = document.getElementById("sett-security-confirm-pass")?.value || "";
        if (!curPass || !newPass || !confPass) {
          showToast("Validation Error", "Please fill in all password fields.", "warning");
          return;
        }
        if (newPass !== confPass) {
          showToast("Validation Error", "New passwords do not match.", "warning");
          return;
        }

        const loggedInEmail = localStorage.getItem("gr_logged_in_email") || "";
        const isAdmin = isAdminSession();
        if (isAdmin) {
          if (curPass !== "admin123") {
            showToast("Security Error", "Current password is incorrect.", "danger");
            return;
          }
          // Predefined admin password mock update
          showToast("Security Settings Saved", "Your console access credentials have been updated.", "success");
        } else {
          const userAccounts = getUserAccounts();
          const accIdx = userAccounts.findIndex(acc => acc.email.toLowerCase() === loggedInEmail.toLowerCase());
          if (accIdx !== -1) {
            if (userAccounts[accIdx].password !== curPass) {
              showToast("Security Error", "Current password is incorrect.", "danger");
              return;
            }
            userAccounts[accIdx].password = newPass;
            localStorage.setItem("gr_user_accounts", JSON.stringify(userAccounts));
            showToast("Security Settings Saved", "Your console access credentials have been updated.", "success");
          } else {
            showToast("Security Error", "User account not found.", "danger");
            return;
          }
        }

        if (document.getElementById("sett-security-current-pass")) document.getElementById("sett-security-current-pass").value = "";
        if (document.getElementById("sett-security-new-pass")) document.getElementById("sett-security-new-pass").value = "";
        if (document.getElementById("sett-security-confirm-pass")) document.getElementById("sett-security-confirm-pass").value = "";
      });
    }

    // Header Connection status pill click routes to Offline Devices overlay
    if (DOM.connectionStatus) {
      DOM.connectionStatus.addEventListener("click", () => {
        switchTab("offline-devices");
      });
    }

    // Real-time validation of Sign Up Device Code input field
    const signupDeviceInput = document.getElementById("signup-device-code");
    if (signupDeviceInput) {
      signupDeviceInput.addEventListener("input", () => {
        const val = signupDeviceInput.value.trim().toUpperCase();
        
        // Reset visual styles
        signupDeviceInput.classList.remove("field-error", "field-success");
        
        if (!val) return;
        
        const deviceCodeRegex = /^(DEV|SN)-[A-Z0-9-]+$/i;
        if (!deviceCodeRegex.test(val)) {
          signupDeviceInput.classList.add("field-error");
          return;
        }
        
        // Look up in database
        let matchedDev = null;
        Object.keys(DEVICES_METADATA).forEach(tripId => {
          const d = DEVICES_METADATA[tripId];
          if (d && (
            (d.id && d.id.toUpperCase() === val) ||
            (d.serialNumber && d.serialNumber.toUpperCase() === val)
          )) {
            matchedDev = d;
          }
        });
        
        if (!matchedDev) {
          signupDeviceInput.classList.add("field-error");
          return;
        }

        // Check if already linked to another account
        const emailInputVal = document.getElementById("signup-email")?.value.trim().toLowerCase() || "";
        const userAccounts = getUserAccounts();
        const isLinkedToOtherAccount = userAccounts.some(acc => 
          acc.email.toLowerCase() !== emailInputVal && (
            (acc.deviceCode && acc.deviceCode.toUpperCase() === matchedDev.id.toUpperCase()) ||
            (acc.serialNumber && acc.serialNumber.toUpperCase() === matchedDev.serialNumber.toUpperCase())
          )
        );
        const isLinkedToOtherCustomer = matchedDev.customer && 
                                        matchedDev.customer.email && 
                                        matchedDev.customer.email.toLowerCase() !== emailInputVal;

        const isAssignedToSelf = matchedDev.customer && 
                                 matchedDev.customer.email && 
                                 matchedDev.customer.email.toLowerCase() === emailInputVal;

        const isStatusAvailable = matchedDev.status === "available" || isAssignedToSelf;
        const isValidAndAvailable = !isLinkedToOtherCustomer && !isLinkedToOtherAccount && isStatusAvailable;

        if (isValidAndAvailable) {
          signupDeviceInput.classList.add("field-success");
        } else {
          signupDeviceInput.classList.add("field-error");
        }
      });
    }

    // Credentials Modal and Card Copy/Share Event Delegation Handlers
    document.body.addEventListener("click", (e) => {
      // 1. Copy button in customer-summary-modal
      const btnCopySummary = e.target.closest(".btn-copy-summary");
      if (btnCopySummary) {
        const targetId = btnCopySummary.getAttribute("data-target");
        const element = document.getElementById(targetId);
        if (element) {
          const textToCopy = element.textContent.trim();
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Copied!", `Copied "${textToCopy}" to clipboard.`, "success");
          }).catch(err => {
            console.error("Clipboard copy failed", err);
          });
        }
        return;
      }

      // 2. Share button in customer-summary-modal
      const btnShareSummary = e.target.closest(".btn-share-summary");
      if (btnShareSummary) {
        const name = document.getElementById("summary-cust-name")?.textContent.trim() || "";
        const email = document.getElementById("summary-cust-email")?.textContent.trim() || "";
        const phone = document.getElementById("summary-cust-phone")?.textContent.trim() || "";
        const device = document.getElementById("summary-device-name")?.textContent.trim() || "";
        const serial = document.getElementById("summary-serial-number")?.textContent.trim() || "";
        const code = document.getElementById("summary-device-code")?.textContent.trim() || "";
        
        const shareText = `Findly Account Created!\n` +
                          `Name: ${name}\n` +
                          `Email: ${email}\n` +
                          `Phone: ${phone}\n` +
                          `Device: ${device}\n` +
                          `Device Code: ${code}\n` +
                          `Serial Number: ${serial}\n` +
                          `Default Password: user123`;
        
        if (navigator.share) {
          navigator.share({
            title: 'Findly Onboarding Credentials',
            text: shareText
          }).catch(err => {
            console.log('Share failed', err);
            // Fallback to copy
            navigator.clipboard.writeText(shareText).then(() => {
              showToast("Credentials Copied", "Account onboarding summary details copied for sharing.", "success");
            });
          });
        } else {
          navigator.clipboard.writeText(shareText).then(() => {
            showToast("Credentials Copied", "Account onboarding summary details copied for sharing.", "success");
          });
        }
        return;
      }

      // 3. Copy All button in summary modal
      const btnCopyAll = e.target.closest("#btn-copy-all-summary");
      if (btnCopyAll) {
        const name = document.getElementById("summary-cust-name")?.textContent.trim() || "";
        const email = document.getElementById("summary-cust-email")?.textContent.trim() || "";
        const phone = document.getElementById("summary-cust-phone")?.textContent.trim() || "";
        const device = document.getElementById("summary-device-name")?.textContent.trim() || "";
        const serial = document.getElementById("summary-serial-number")?.textContent.trim() || "";
        const code = document.getElementById("summary-device-code")?.textContent.trim() || "";
        
        const shareText = `Findly Onboarding Summary:\n` +
                          `Customer Name: ${name}\n` +
                          `Email: ${email}\n` +
                          `Phone: ${phone}\n` +
                          `Assigned Device: ${device}\n` +
                          `Device Code: ${code}\n` +
                          `Serial Number: ${serial}\n` +
                          `Default Password: user123`;
        
        navigator.clipboard.writeText(shareText).then(() => {
          showToast("Credentials Copied", "Onboarding summary copied to clipboard.", "success");
        }).catch(err => {
          console.error("Clipboard copy failed", err);
        });
        return;
      }

      // 4. Click-to-copy active device or serial number in Sidebar
      const copyableText = e.target.closest(".copyable-text");
      if (copyableText) {
        const textToCopy = copyableText.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast("Copied!", `Copied "${textToCopy}" to clipboard.`, "success");
        }).catch(err => {
          console.error("Clipboard copy failed", err);
        });
        return;
      }

      // 5. Copy button in Customer Directory cards
      const btnCopyCardStat = e.target.closest(".btn-copy-card-stat");
      if (btnCopyCardStat) {
        const textToCopy = btnCopyCardStat.getAttribute("data-copy-text");
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Copied!", `Copied "${textToCopy}" to clipboard.`, "success");
          }).catch(err => {
            console.error("Clipboard copy failed", err);
          });
        }
        return;
      }
    });

    const btnCloseSummaryModal = document.getElementById("btn-close-summary-modal");
    if (btnCloseSummaryModal) {
      btnCloseSummaryModal.addEventListener("click", () => {
        const modal = document.getElementById("customer-summary-modal");
        if (modal) modal.style.display = "none";
      });
    }

    // Initialize Profile Dropdown Events
    initProfileDropdown();
  }

  // --- WhatsApp Redirection Helper ---
  function openWhatsAppChat(phone) {
    if (!phone) {
      showToast("Contact Error", "Contact information is not available.", "danger");
      return;
    }
    
    // Clean phone number: remove non-digits
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone) {
      showToast("Contact Error", "The contact phone number is invalid.", "danger");
      return;
    }
    
    const msg = encodeURIComponent("Hello, I am contacting you regarding your assigned tracking device.");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    let url;
    if (isMobile) {
      url = `whatsapp://send?phone=${cleanPhone}&text=${msg}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${msg}`;
    }
    
    window.open(url, "_blank");
  }

  // --- Profile Dropdown Interactivity & Logic ---
  function getCurrentUser() {
    const email = localStorage.getItem("gr_logged_in_email") || "";
    const isAdmin = isAdminSession();
    
    if (isAdmin) {
      return {
        name: localStorage.getItem("gr_signup_name") || "Administrator",
        email: email || "admin@gmail.com",
        role: "Admin",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop"
      };
    }
    
    const customers = getUniqueCustomers();
    const match = customers.find(c => c.email && c.email.toLowerCase() === email.toLowerCase());
    
    if (match) {
      return {
        name: match.name || "Standard User",
        email: match.email || email,
        role: "User",
        avatar: match.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
      };
    }
    
    return {
      name: localStorage.getItem("gr_signup_name") || "Standard User",
      email: email || "user@example.com",
      role: "User",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
    };
  }

  function populateProfileDropdownDetails() {
    const user = getCurrentUser();
    
    // Update trigger button avatars
    const headerAvatar = document.getElementById("header-profile-avatar");
    const mobileHeaderAvatar = document.getElementById("mobile-header-profile-avatar");
    if (headerAvatar) headerAvatar.src = user.avatar;
    if (mobileHeaderAvatar) mobileHeaderAvatar.src = user.avatar;
    
    // Update dropdown header details (desktop & mobile)
    const elements = {
      "dropdown-profile-avatar": user.avatar,
      "mobile-dropdown-profile-avatar": user.avatar,
      "dropdown-profile-name": user.name,
      "mobile-dropdown-profile-name": user.name,
      "dropdown-profile-email": user.email,
      "mobile-dropdown-profile-email": user.email,
      "dropdown-profile-role": user.role === "Admin" ? "Administrator" : "Standard User",
      "mobile-dropdown-profile-role": user.role === "Admin" ? "Administrator" : "Standard User"
    };
    
    Object.keys(elements).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === "IMG") {
          el.src = elements[id];
        } else {
          el.textContent = elements[id];
        }
      }
    });
    
    // Role-based visibility for Assignments dropdown item
    const showAssignments = (user.role === "Admin");
    const assignmentsItem = document.getElementById("dropdown-item-assignments");
    const mobileAssignmentsItem = document.getElementById("mobile-dropdown-item-assignments");
    
    if (assignmentsItem) assignmentsItem.style.display = showAssignments ? "flex" : "none";
    if (mobileAssignmentsItem) mobileAssignmentsItem.style.display = showAssignments ? "flex" : "none";
    
    // Re-create icons for new avatars/lucides if needed
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function initProfileDropdown() {
    const desktopBtn = document.getElementById("profile-dropdown-btn");
    const desktopMenu = document.getElementById("profile-dropdown-menu");
    const desktopContainer = document.getElementById("profile-dropdown-container");
    
    const mobileBtn = document.getElementById("mobile-profile-dropdown-btn");
    const mobileMenu = document.getElementById("mobile-profile-dropdown-menu");
    const mobileContainer = document.getElementById("mobile-profile-dropdown-container");
    
    function toggleDropdown(btn, menu, container) {
      if (!menu || !container) return;
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      
      // Close other dropdown
      closeAllDropdowns();
      
      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        container.classList.add("open");
        menu.style.display = "block";
        setTimeout(() => menu.classList.add("show"), 10);
      } else {
        btn.setAttribute("aria-expanded", "false");
        container.classList.remove("open");
        menu.classList.remove("show");
        setTimeout(() => {
          if (!menu.classList.contains("show")) menu.style.display = "none";
        }, 200);
      }
    }
    
    function closeAllDropdowns() {
      [
        { btn: desktopBtn, menu: desktopMenu, container: desktopContainer },
        { btn: mobileBtn, menu: mobileMenu, container: mobileContainer }
      ].forEach(item => {
        if (item.btn) item.btn.setAttribute("aria-expanded", "false");
        if (item.container) item.container.classList.remove("open");
        if (item.menu) {
          item.menu.classList.remove("show");
          setTimeout(() => {
            if (item.menu && !item.menu.classList.contains("show")) item.menu.style.display = "none";
          }, 200);
        }
      });
    }
    
    if (desktopBtn) {
      desktopBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(desktopBtn, desktopMenu, desktopContainer);
      });
    }
    
    if (mobileBtn) {
      mobileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(mobileBtn, mobileMenu, mobileContainer);
      });
    }
    
    // Close dropdown on click outside
    document.addEventListener("click", (e) => {
      const isDropdownClick = e.target.closest(".profile-dropdown-container");
      if (!isDropdownClick) {
        closeAllDropdowns();
      }
    });
    
    // Attach click events to menu option anchors (desktop & mobile)
    document.querySelectorAll(".profile-dropdown-menu .dropdown-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const action = item.getAttribute("data-action");
        if (action) {
          handleDropdownAction(action);
        }
      });
    });
  }

  function handleDropdownAction(action) {
    const isAdmin = isAdminSession();
    
    switch (action) {
      case "dashboard-overview":
        switchTab("live-tracking");
        break;
      case "my-profile":
      case "account-info":
        switchTab("settings");
        setTimeout(() => switchSettingsTab("general"), 50);
        break;
      case "assigned-devices":
        switchTab("devices");
        break;
      case "assignments":
        if (isAdmin) {
          switchTab("assignments");
        } else {
          showToast("Access Denied", "Only administrators can access assignments.", "warning");
        }
        break;
      case "notifications":
        switchTab("settings");
        setTimeout(() => switchSettingsTab("notifications"), 50);
        break;
      case "settings":
        switchTab("settings");
        break;
      case "change-password":
        switchTab("settings");
        setTimeout(() => switchSettingsTab("security"), 50);
        break;
      case "help-support":
        showToast("Help & Support", "Support desk is simulated. Offline mode active.", "info");
        break;
      case "sign-out":
        logoutUser();
        break;
    }
  }

  function logoutUser() {
    localStorage.removeItem("gr_logged_in");
    localStorage.removeItem("gr_logged_in_email");
    localStorage.removeItem("gr_logged_in_role");
    localStorage.removeItem("gr_signup_name");
    localStorage.removeItem("gr_signup_phone");
    state.selectedCustomerEmail = null;
    
    // Clear out any dynamic devices from in-memory DEVICES_METADATA
    Object.keys(DEVICES_METADATA).forEach(tripId => {
      if (tripId.startsWith("trip-new-")) {
        delete DEVICES_METADATA[tripId];
      }
    });

    // Revert core default devices to original presets
    const originalDefaults = {
      "trip-1": {
        customer: {
          name: "Devon Lane",
          phone: "+91 98480 22338",
          email: "devon.lane@outlook.com",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
        },
        status: "assigned"
      },
      "trip-2": {
        customer: {
          name: "Sarah Connor",
          phone: "+91 81234 56789",
          email: "s.connor@cyberdyne.com",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
        },
        status: "rented"
      },
      "trip-3": {
        customer: {
          name: "Marcus Wright",
          phone: "+91 78930 11223",
          email: "m.wright@resistance.net",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
        },
        status: "maintenance"
      },
      "trip-4": {
        customer: {
          name: "Lisa Simpson",
          phone: "+91 90001 20002",
          email: "lisa.s@springfield.org",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
        },
        status: "missing"
      },
      "trip-5": {
        customer: null,
        status: "available"
      }
    };

    Object.keys(originalDefaults).forEach(tripId => {
      if (DEVICES_METADATA[tripId]) {
        DEVICES_METADATA[tripId].customer = originalDefaults[tripId].customer;
        DEVICES_METADATA[tripId].status = originalDefaults[tripId].status;
      }
    });

    // Reload persisted database state to memory so they are ready
    loadPersistedCustomerOverrides();
    loadPersistedAssignments();

    resetAllSimulationStates();
    
    showLoginScreen();
    showToast("Signed Out", "You have been logged out of the session.", "info");
  }

  // --- Mobile Bottom Sheet Drag/Swipe Logic ---
  let isSheetExpanded = false;

  function setupBottomSheetDrag() {
    const handle = document.getElementById("bottom-sheet-drag-handle");
    const panel = document.getElementById("floating-telemetry-panel");
    if (!handle || !panel) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let startTranslateY = 0;

    // Toggle expand/collapse on tap/click
    handle.addEventListener("click", () => {
      if (isSheetExpanded) {
        collapseBottomSheet();
      } else {
        expandBottomSheet();
      }
    });

    handle.addEventListener("touchstart", (e) => {
      if (window.innerWidth > 768) return;
      startY = e.touches[0].clientY;
      currentY = startY;
      isDragging = true;
      panel.style.transition = "none"; // Disable CSS transitions during drag
      
      const style = window.getComputedStyle(panel);
      const matrix = new WebKitCSSMatrix(style.transform);
      startTranslateY = matrix.m42 || 0; // Get current translateY value
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      let targetTranslateY = startTranslateY + deltaY;
      if (targetTranslateY < 0) targetTranslateY = 0; // Don't drag past top limit
      
      panel.style.transform = `translateY(${targetTranslateY}px)`;
    }, { passive: false });

    window.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      panel.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      
      const deltaY = currentY - startY;
      if (deltaY < -50) {
        expandBottomSheet();
      } else if (deltaY > 50) {
        collapseBottomSheet();
      } else {
        if (isSheetExpanded) {
          expandBottomSheet();
        } else {
          collapseBottomSheet();
        }
      }
    });
  }

  function expandBottomSheet() {
    const panel = document.getElementById("floating-telemetry-panel");
    if (!panel) return;
    panel.classList.add("expanded");
    panel.classList.remove("collapsed");
    panel.style.transform = "translateY(0)";
    isSheetExpanded = true;
  }

  function collapseBottomSheet() {
    const panel = document.getElementById("floating-telemetry-panel");
    if (!panel) return;
    panel.classList.remove("expanded");
    panel.classList.remove("collapsed");
    if (window.innerWidth <= 768) {
      panel.style.transform = "translateY(calc(100% - 130px))";
    } else {
      panel.style.transform = "none";
    }
    isSheetExpanded = false;
  }

  // --- Password visibility eye toggle ---
  function togglePasswordVisibility() {
    if (!DOM.loginPassword || !DOM.passwordToggle) return;
    const isPassword = DOM.loginPassword.type === "password";
    DOM.loginPassword.type = isPassword ? "text" : "password";
    
    const eyeOpen = DOM.passwordToggle.querySelector(".eye-open-icon");
    const eyeClosed = DOM.passwordToggle.querySelector(".eye-closed-icon");
    
    if (eyeOpen && eyeClosed) {
      if (isPassword) {
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
      } else {
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
      }
    }
  }

  // --- Authentication Submit gate ---
  function handleLoginSubmit(e) {
    e.preventDefault();
    
    if (DOM.loginErrorMsg) {
      DOM.loginErrorMsg.style.display = "none";
    }
    
    const email = DOM.loginUsername ? DOM.loginUsername.value.trim() : "";
    const password = DOM.loginPassword ? DOM.loginPassword.value : "";
    const role = document.getElementById("login-account-role")?.value || "user";
    const deviceCode = document.getElementById("login-device-code")?.value.trim().toUpperCase() || "";

    if (!email) {
      showLoginError("Please enter your email or mobile number");
      return;
    }

    if (role === "user" && !deviceCode) {
      showLoginError("Please enter your assigned Device Code.");
      return;
    }

    if (!password) {
      showLoginError("Please enter your password");
      return;
    }

    // Toggle button loading animations
    if (DOM.btnLoginSubmit && DOM.btnLoginText && DOM.loginSpinner) {
      DOM.btnLoginSubmit.disabled = true;
      DOM.btnLoginText.style.display = "none";
      DOM.loginSpinner.style.display = "block";
    }

    // Simulate loading state
    setTimeout(() => {
      const resetSpinner = () => {
        if (DOM.btnLoginSubmit && DOM.btnLoginText && DOM.loginSpinner) {
          DOM.btnLoginSubmit.disabled = false;
          DOM.btnLoginText.style.display = "block";
          DOM.loginSpinner.style.display = "none";
        }
      };

      if (role === "admin") {
        if (email.toLowerCase() !== "admin@gmail.com") {
          resetSpinner();
          showLoginError("User Account Not Found");
          return;
        }
        if (password !== "admin123") {
          resetSpinner();
          showLoginError("Invalid Password");
          return;
        }

        // Support separate optional Admin Access Code
        if (deviceCode && deviceCode !== "ADMIN-SECURE" && deviceCode !== "ADM-9999") {
          resetSpinner();
          showLoginError("Invalid Device Code");
          return;
        }
      } else {
        // User login validation (must be valid email or phone)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[+\d\s-]{8,20}$/;
        
        const isEmail = emailRegex.test(email);
        const isPhone = phoneRegex.test(email);
        
        if (!isEmail && !isPhone) {
          resetSpinner();
          showLoginError("Please enter a valid email address or mobile number");
          return;
        }

        // 1. Check if user account exists in gr_user_accounts
        const userAccounts = getUserAccounts();
        const customer = userAccounts.find(acc => {
          const matchEmail = acc.email && acc.email.toLowerCase() === email.toLowerCase();
          const cleanInputPhone = email.replace(/\D/g, "");
          const cleanCustPhone = acc.phone ? acc.phone.replace(/\D/g, "") : "";
          const matchPhone = cleanInputPhone && cleanCustPhone && (cleanCustPhone.includes(cleanInputPhone) || cleanInputPhone.includes(cleanCustPhone));
          return matchEmail || matchPhone;
        });

        if (!customer) {
          resetSpinner();
          showLoginError("User Account Not Found");
          return;
        }

        // 2. Verify password
        if (customer.password !== password) {
          resetSpinner();
          showLoginError("Invalid Password");
          return;
        }

        // 3. Find device in DEVICES_METADATA that matches the entered deviceCode
        const deviceKey = Object.keys(DEVICES_METADATA).find(tripId => {
          const dev = DEVICES_METADATA[tripId];
          return dev && (
            (dev.id && dev.id.toUpperCase() === deviceCode) ||
            (dev.serialNumber && dev.serialNumber.toUpperCase() === deviceCode)
          );
        });

        if (!deviceKey) {
          resetSpinner();
          showLoginError("Invalid Device Code");
          return;
        }

        const device = DEVICES_METADATA[deviceKey];

        // 4. Verify if device is unassigned
        if (!device.customer) {
          resetSpinner();
          showLoginError("Device Code is unassigned. Please contact support.");
          return;
        }

        // 5. Verify that it is linked to the user's account
        const assignedEmail = device.customer.email ? device.customer.email.toLowerCase() : "";
        const assignedPhone = device.customer.phone ? device.customer.phone.replace(/\D/g, "") : "";
        const customerEmail = customer.email ? customer.email.toLowerCase() : "";
        const customerPhone = customer.phone ? customer.phone.replace(/\D/g, "") : "";

        const belongsToAccount = (assignedEmail && assignedEmail === customerEmail) || 
                                 (assignedPhone && customerPhone && assignedPhone === customerPhone);

        if (!belongsToAccount) {
          resetSpinner();
          showLoginError("This device belongs to another account. Access denied.");
          return;
        }

        // 6. Check for inactive or disabled/missing devices
        if (device.status === "inactive" || customer.status === "inactive") {
          resetSpinner();
          showLoginError("Account Disabled");
          return;
        }

        if (device.status === "missing") {
          resetSpinner();
          showLoginError("This device is marked as missing. Access denied.");
          return;
        }
      }

      resetSpinner();
      localStorage.setItem("gr_logged_in_email", email);
      localStorage.setItem("gr_logged_in_role", role);
      handleSuccessfulLogin();
    }, 400);
  }

  function showLoginError(msg) {
    if (DOM.errorText && DOM.loginErrorMsg) {
      DOM.errorText.textContent = msg;
      DOM.loginErrorMsg.style.display = "flex";
    }
  }

  // --- Theme Toggle Control ---
  function toggleTheme() {
    if (state.theme === "theme-dark") {
      state.theme = "theme-light";
    } else {
      state.theme = "theme-dark";
    }
    document.body.className = state.theme;
    localStorage.setItem("gr_theme", state.theme);

    // Update map theme tiles dynamically
    if (mapInstance) {
      updateMapTileTheme();
    }
  }

  // --- customer chat response logic ---
  function handleCustomerResponseToUser(userText) {
    if (!state.activeTripId) return;
    const tripId = state.activeTripId;
    const meta = DEVICES_METADATA[tripId];
    if (!meta.customer) {
      addChatBubble(`System: Device is unassigned. Direct chat communication unavailable.`, "system");
      return;
    }
    const textLower = userText.toLowerCase();
    
    let reply = "Understood. Thanks for reaching out.";
    
    if (textLower.includes("where") || textLower.includes("location") || textLower.includes("battery")) {
      const tripState = state.trips[tripId];
      reply = `The device is currently at ${tripState.locationName}. Current battery level is ${tripState.battery}%.`;
    } else if (textLower.includes("hello") || textLower.includes("hi") || textLower.includes("hey")) {
      reply = `Hello! Everything is working fine. Let me know if you need anything else.`;
    } else if (textLower.includes("return") || textLower.includes("lease") || textLower.includes("warranty")) {
      reply = `The lease started on ${meta.rentalDate}. The warranty status is ${meta.warrantyStatus}.`;
    } else {
      reply = `Received. I'll get back to you shortly.`;
    }

    addChatBubble(`${meta.customer.name}: ${reply}`, "driver");
  }

  // --- Mapping setup ---
  function initMap() {
    if (mapInstance) return;

    // Centered around general Hyderabad area
    mapInstance = L.map("map", {
      zoomControl: false,
      zoomAnimation: true,
      fadeAnimation: true
    }).setView([17.3850, 78.4867], 12);

    // Position zoom controls in top-right to prevent overlap with left panel
    L.control.zoom({ position: 'topright' }).addTo(mapInstance);

    // Render Tile Theme
    updateMapTileTheme();
    
    // Draw initial layers
    drawMapLayers();
    recenterMap(true);
  }

  function updateMapTileTheme() {
    if (!mapInstance) return;
    if (tileLayer) {
      mapInstance.removeLayer(tileLayer);
    }

    const isDark = state.theme === "theme-dark";
    const tileUrl = isDark 
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    tileLayer = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapInstance);
  }

  // --- Helper to build custom styled device markers ---
  function getDeviceMarkerHtml(category, status, connectionStatus = "online", size = 28) {
    const isMissing = status === "missing";
    const isOffline = connectionStatus === "offline";
    
    const accentColor = isOffline 
      ? "#525252" 
      : (isMissing ? "#ef4444" : (status === "maintenance" ? "#f59e0b" : (status === "available" ? "#3b82f6" : "#22c55e")));
    
    let iconName = "cpu";
    if (category === "Electronics") iconName = "laptop";
    else if (category === "Audio/Visual") iconName = "video";
    else if (category === "Lighting") iconName = "lightbulb";
    else if (category === "Photography") iconName = "camera";
    else if (category === "Equipment") iconName = "wrench";

    if (isMissing) {
      iconName = "alert-triangle";
    }

    const shadowClass = isOffline ? "" : (isMissing ? "pulsing-missing-marker" : "");
    const offlineClass = isOffline ? "marker-offline" : "";
    const sizeStyle = `width:${size}px; height:${size}px;`;
    const iconSize = size - 14;

    return `
      <div class="custom-car-marker ${shadowClass} ${offlineClass}" style="overflow:visible; display:flex; align-items:center; justify-content:center; ${sizeStyle}">
        <div id="marker-car-rotator" style="background-color:${accentColor}; color:#000; border:2px solid var(--bg-secondary); border-radius:50%; width:${size - 2}px; height:${size - 2}px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px ${accentColor}; transform:rotate(0deg); transition:transform 0.15s ease; ${isOffline ? 'filter: grayscale(1) opacity(0.6);' : ''}">
          <i data-lucide="${iconName}" style="width:${iconSize}px; height:${iconSize}px; color:#000; fill:none;"></i>
        </div>
      </div>
    `;
  }

  // --- Draw Map Layers depending on Active View ---
  function drawMapLayers() {
    if (!mapInstance) return;

    // 1. Clear any active tracking layers
    if (carMarker) { mapInstance.removeLayer(carMarker); carMarker = null; }
    if (pickupMarker) { mapInstance.removeLayer(pickupMarker); pickupMarker = null; }
    if (destMarker) { mapInstance.removeLayer(destMarker); destMarker = null; }
    if (polylineTraversed) { mapInstance.removeLayer(polylineTraversed); polylineTraversed = null; }
    if (polylineRemaining) { mapInstance.removeLayer(polylineRemaining); polylineRemaining = null; }

    // 2. Clear any fleet overview markers
    if (fleetMarkersGroup) {
      mapInstance.removeLayer(fleetMarkersGroup);
      fleetMarkersGroup = null;
    }

    // Case A: Fleet Overview
    if (!state.activeTripId || !state.isTrackingActive) {
      fleetMarkersGroup = L.featureGroup().addTo(mapInstance);
      
      const loggedInEmail = localStorage.getItem("gr_logged_in_email");
      const isAdmin = isAdminSession();

      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const meta = DEVICES_METADATA[tripId];
        
        // If user is not admin, only show their own devices
        if (!isAdmin && loggedInEmail) {
          if (!meta.customer || !meta.customer.email || meta.customer.email.toLowerCase() !== loggedInEmail.toLowerCase()) {
            return;
          }
        }
        
        const pts = INTERPOLATED_TRIPS[tripId];
        const tripState = state.trips[tripId];
        const currentLoc = (tripState.lat && tripState.lng) ? [tripState.lat, tripState.lng] : pts[tripState.currentStepIndex];

        const fleetIcon = L.divIcon({
          html: getDeviceMarkerHtml(meta.category, tripState.status, tripState.connectionStatus, 28),
          className: 'custom-car-icon',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const holderName = meta.customer ? meta.customer.name : "No Assigned Holder";

        const popupContent = `
          <div style="font-family:var(--font-sans); font-size:0.75rem; color:var(--text-primary); line-height:1.4; padding:2px;">
            <div style="font-weight:800; border-bottom:1px solid var(--border-color); padding-bottom:4px; margin-bottom:4px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <span>${meta.name}</span>
              <div style="display:flex; gap:4px;">
                <span class="status-badge ${tripState.status}" style="font-size:0.55rem; padding:1px 4px;">${tripState.status}</span>
                <span class="status-badge ${tripState.connectionStatus}" style="font-size:0.55rem; padding:1px 4px;">${tripState.connectionStatus}</span>
              </div>
            </div>
            ID: <b>${meta.id}</b><br>
            Serial: <b>${meta.serialNumber}</b><br>
            Holder: <b>${holderName}</b><br>
            Battery: <b>${tripState.battery}%</b><br>
            Location: <b>${tripState.locationName}</b><br>
            <button class="btn btn-primary btn-sm popup-track-btn" data-trip-id="${tripId}" style="width:100%; height:26px; margin-top:8px;">
              <i data-lucide="navigation" style="width:10px; height:10px; transform:rotate(45deg);"></i> Track Device
            </button>
          </div>
        `;

        const marker = L.marker(currentLoc, { icon: fleetIcon })
          .addTo(fleetMarkersGroup)
          .bindPopup(popupContent);
      });

      lucide.createIcons();

    // Case B: Live Tracking View
    } else if (state.activeTripId && state.isTrackingActive) {
      const tripId = state.activeTripId;
      const meta = DEVICES_METADATA[tripId];
      const pts = INTERPOLATED_TRIPS[tripId];
      const tripState = state.trips[tripId];

      const pickupLoc = pts[0];
      const destLoc = pts[pts.length - 1];
      const carLoc = (tripState.lat && tripState.lng) ? [tripState.lat, tripState.lng] : pts[tripState.currentStepIndex];

      // 1. Pickup Pin Marker
      const pickupIcon = L.divIcon({
        html: `
          <div class="custom-pickup-marker" style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;">
            <div style="background-color:var(--bg-secondary);border:2px solid var(--accent-blue);border-radius:50%;padding:4px;box-shadow:0 0 10px rgba(59,130,246,0.5);display:flex;">
              <i data-lucide="home" style="width:12px;height:12px;color:var(--accent-blue);"></i>
            </div>
          </div>
        `,
        className: 'custom-pickup-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      pickupMarker = L.marker(pickupLoc, { icon: pickupIcon })
        .addTo(mapInstance)
        .bindPopup(`<b>Dispatch Depot:</b><br>${meta.locationNames[0]}`);

      // 2. Destination Pin Marker
      const destIcon = L.divIcon({
        html: `
          <div class="custom-dest-marker" style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;">
            <div style="background-color:var(--bg-secondary);border:2px solid var(--danger);border-radius:50%;padding:4px;box-shadow:0 0 10px rgba(239,68,68,0.5);display:flex;">
              <i data-lucide="map-pin" style="width:12px;height:12px;color:var(--danger);"></i>
            </div>
          </div>
        `,
        className: 'custom-dest-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      destMarker = L.marker(destLoc, { icon: destIcon })
        .addTo(mapInstance)
        .bindPopup(`<b>Deployment Destination:</b><br>${meta.locationNames[meta.locationNames.length - 1]}`);

      // 3. Moving Device Marker
      const carIcon = L.divIcon({
        html: getDeviceMarkerHtml(meta.category, tripState.status, tripState.connectionStatus, 32),
        className: 'custom-car-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      carMarker = L.marker(carLoc, { icon: carIcon })
        .addTo(mapInstance)
        .bindPopup(`<b>Device:</b> ${meta.name}<br><b>Serial:</b> ${meta.serialNumber}`);

      // Draw Path Polylines
      drawPolylines();
      lucide.createIcons();
    }
  }

  function drawPolylines() {
    if (!mapInstance || !state.activeTripId || !state.isTrackingActive) return;

    const tripId = state.activeTripId;
    const pts = INTERPOLATED_TRIPS[tripId];
    const splitIndex = state.trips[tripId].currentStepIndex;

    if (polylineTraversed) mapInstance.removeLayer(polylineTraversed);
    if (polylineRemaining) mapInstance.removeLayer(polylineRemaining);

    const traversedPoints = pts.slice(0, splitIndex + 1);
    const remainingPoints = pts.slice(splitIndex);

    // Completed Path (Grey dashed line)
    polylineTraversed = L.polyline(traversedPoints, {
      color: state.theme === "theme-dark" ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)",
      weight: 4,
      dashArray: "5, 5"
    }).addTo(mapInstance);

    // Remaining Path (Bright Green / Teal line)
    polylineRemaining = L.polyline(remainingPoints, {
      color: "var(--accent)",
      weight: 5,
      opacity: 0.85
    }).addTo(mapInstance);
  }

  function recenterMap(fitAll = false) {
    if (!mapInstance) return;

    if (fitAll) {
      // Zoom map out to fit all coordinate waypoints
      const bounds = [];
      Object.keys(TRIP_WAYPOINTS).forEach(tripId => {
        TRIP_WAYPOINTS[tripId].forEach(pt => bounds.push(pt));
      });
      if (bounds.length > 0) {
        mapInstance.fitBounds(bounds, { animate: true, padding: [40, 40] });
      }
    } else {
      if (!state.activeTripId) return;
      const tripId = state.activeTripId;
      const pts = INTERPOLATED_TRIPS[tripId];
      const tripState = state.trips[tripId];
      const carLoc = (tripState.lat && tripState.lng) ? [tripState.lat, tripState.lng] : pts[tripState.currentStepIndex];
      mapInstance.setView(carLoc, 15, { animate: true, duration: 0.5 });
    }
  }

  function getAngleDegrees(start, end) {
    const dy = end[0] - start[0];
    const dx = end[1] - start[1];
    return Math.atan2(dy, dx) * (180 / Math.PI);
  }

  // --- Real-time Watchdog Connection & Status Clock ---
  function startWatchdogClock() {
    if (simulationInterval) clearInterval(simulationInterval);

    simulationInterval = setInterval(() => {
      if (!state.isLoggedIn) return;

      const now = Date.now();
      let secondsSinceLastUpdate = Infinity;
      if (state.lastUpdateReceivedTime) {
        secondsSinceLastUpdate = Math.floor((now - state.lastUpdateReceivedTime) / 1000);
      }

      let statusChanged = false;

      // Loop through all devices to check connection status
      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const tripState = state.trips[tripId];
        if (tripState) {
          if (!tripState.lastPingTime) {
            tripState.lastPingTime = now;
          }
          
          const devicePingAge = now - tripState.lastPingTime;
          const isOfflineNow = devicePingAge > 20000;
          const targetConnectionStatus = isOfflineNow ? "offline" : "online";

          if (tripState.connectionStatus !== targetConnectionStatus) {
            tripState.connectionStatus = targetConnectionStatus;
            statusChanged = true;
            
            // Sync active tracking badges
            if (tripId === state.activeTripId) {
              const trackingVehicleConnectionStatus = document.getElementById("tracking-vehicle-connection-status");
              if (trackingVehicleConnectionStatus) {
                trackingVehicleConnectionStatus.textContent = targetConnectionStatus;
                trackingVehicleConnectionStatus.className = `status-badge ${targetConnectionStatus}`;
              }
            }
          }
        }
      });

      if (statusChanged) {
        renderFleetCardsList();
        if (state.activeTab === "offline-devices") {
          renderOfflineDevicesTable();
        }
        if (mapInstance && (!state.activeTripId || !state.isTrackingActive)) {
          drawMapLayers();
        }
      }

      updateDynamicCounters();

      // Update telemetry ping timer text
      if (DOM.telemetryPingTime && state.activeTripId && state.activeTab === "live-tracking") {
        if (state.lastUpdateReceivedTime) {
          DOM.telemetryPingTime.textContent = `Last ping: ${secondsSinceLastUpdate}s ago`;
        } else {
          DOM.telemetryPingTime.textContent = "Waiting for GPS ping...";
        }
      }

      // Update connection status pill and alert banner
      if (secondsSinceLastUpdate <= 4) {
        setConnectionStatus("tracking", "Tracking Live");
        if (DOM.gpsOfflineBanner) DOM.gpsOfflineBanner.style.display = "none";
      } else if (state.lastUpdateReceivedTime) {
        setConnectionStatus("connected", "Connected");
        if (DOM.gpsOfflineBanner) DOM.gpsOfflineBanner.style.display = "flex";
      } else {
        setConnectionStatus("offline", "Offline");
        if (DOM.gpsOfflineBanner) DOM.gpsOfflineBanner.style.display = "flex";
      }

      // Update elapsed duration if active tracking is on and vehicle is in-transit
      if (state.activeTripId && state.isTrackingActive) {
        const tripState = state.trips[state.activeTripId];
        if (tripState.status === "in-transit" && !state.isPaused) {
          tripState.elapsedSeconds++;
          const elapsedMins = Math.floor(tripState.elapsedSeconds / 60);
          if (DOM.statDuration) DOM.statDuration.textContent = `${elapsedMins} mins`;
        }
      }
    }, 1000);
  }

  // --- Initialize Real-Time Connection ---
  let broadcastChannel = null;

  function initRealtimeConnection() {
    const isDemo = window.FINDLY_DEMO_MODE !== false;

    if (isDemo) {
      // 1. BroadcastChannel connection (local multi-tab demo)
      try {
        if (broadcastChannel) {
          broadcastChannel.close();
        }
        broadcastChannel = new BroadcastChannel('findly-vehicles');
        broadcastChannel.onmessage = (event) => {
          if (event.data && event.data.type === 'vehicle-update') {
            handleIncomingVehicleUpdate(event.data.data);
          }
        };
        console.log("Real-time BroadcastChannel initialized: findly-vehicles");
        setConnectionStatus("connected", "Connected");
      } catch (e) {
        console.error("Failed to connect to BroadcastChannel:", e);
        setConnectionStatus("offline", "Channel Error");
      }
    } else {
      // 2. Firebase Database connection (multi-device)
      if (typeof firebase !== 'undefined' && window.FINDLY_FIREBASE_CONFIG && window.FINDLY_FIREBASE_CONFIG.apiKey) {
        try {
          if (firebase.apps.length === 0) {
            firebase.initializeApp(window.FINDLY_FIREBASE_CONFIG);
          }
          const dbRef = firebase.database().ref('vehicles');
          setConnectionStatus("connected", "Firebase Connected");

          dbRef.on('child_added', (snapshot) => {
            if (snapshot.exists()) {
              handleIncomingVehicleUpdate(snapshot.val());
            }
          });

          dbRef.on('child_changed', (snapshot) => {
            if (snapshot.exists()) {
              handleIncomingVehicleUpdate(snapshot.val());
            }
          });
          console.log("Real-time Firebase listener initialized.");
        } catch (e) {
          console.error("Firebase initialization failed:", e);
          setConnectionStatus("offline", "Firebase Error");
        }
      } else {
        console.error("Firebase config is missing or unconfigured.");
        setConnectionStatus("offline", "Firebase Offline");
      }
    }
  }

  // --- Connection Status Pill Manager ---
  function setConnectionStatus(status, label) {
    if (!DOM.connectionStatus || !DOM.connectionStatusText) return;
    
    const onlineCount = Object.keys(DEVICES_METADATA).filter(tripId => {
      const tripState = state.trips[tripId];
      return tripState && tripState.connectionStatus === "online";
    }).length;

    const offlineCount = Object.keys(DEVICES_METADATA).filter(tripId => {
      const tripState = state.trips[tripId];
      return tripState && tripState.connectionStatus === "offline";
    }).length;

    DOM.connectionStatus.className = `connection-status-pill ${status}`;
    DOM.connectionStatusText.textContent = `Online: ${onlineCount} • Offline: ${offlineCount}`;
  }

  // --- Dynamic counters sync across modules ---
  function updateDynamicCounters() {
    const onlineCount = Object.keys(DEVICES_METADATA).filter(tripId => {
      const tripState = state.trips[tripId];
      return tripState && tripState.connectionStatus === "online";
    }).length;

    const offlineCount = Object.keys(DEVICES_METADATA).filter(tripId => {
      const tripState = state.trips[tripId];
      return tripState && tripState.connectionStatus === "offline";
    }).length;

    // Update left Selection Panel counters
    const onlineCounterEl = document.getElementById("fleet-counter-online");
    const offlineCounterEl = document.getElementById("fleet-counter-offline");
    if (onlineCounterEl) onlineCounterEl.textContent = onlineCount;
    if (offlineCounterEl) offlineCounterEl.textContent = offlineCount;
  }

  // --- Distance-minimizing helper to map coords to route points ---
  function findClosestStepIndex(tripId, lat, lng) {
    const pts = INTERPOLATED_TRIPS[tripId];
    if (!pts) return 0;
    let minD = Infinity;
    let bestIdx = 0;
    for (let i = 0; i < pts.length; i++) {
      const d = Math.pow(pts[i][0] - lat, 2) + Math.pow(pts[i][1] - lng, 2);
      if (d < minD) {
        minD = d;
        bestIdx = i;
      }
    }
    return bestIdx;
  }

  // --- Real-Time incoming telemetry update handler ---
  function handleIncomingVehicleUpdate(payload) {
    if (!payload || !payload.tripId) return;

    const tripId = payload.tripId;
    
    if (!state.trips[tripId]) {
      state.trips[tripId] = {};
    }

    const tripState = state.trips[tripId];
    const pts = INTERPOLATED_TRIPS[tripId];
    const closestIdx = findClosestStepIndex(tripId, payload.lat, payload.lng);

    const oldConnStatus = tripState.connectionStatus;

    // Update state variables
    tripState.lat = payload.lat;
    tripState.lng = payload.lng;
    tripState.currentStepIndex = closestIdx;
    tripState.speed = payload.speed || 0;
    
    // Decouple status from offline override
    tripState.status = payload.status || tripState.status || "assigned";
    
    tripState.distanceRemaining = payload.distanceRemaining !== undefined ? payload.distanceRemaining : 0;
    tripState.etaMins = payload.etaMins !== undefined ? payload.etaMins : 0;
    tripState.locationName = payload.locationName || "Unknown Landmark";

    // Track device-specific ping time and last online timestamp
    tripState.connectionStatus = "online";
    tripState.lastPingTime = Date.now();
    const nowObj = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    tripState.lastOnlineTimestamp = `${nowObj.getFullYear()}-${pad(nowObj.getMonth() + 1)}-${pad(nowObj.getDate())} ${pad(nowObj.getHours())}:${pad(nowObj.getMinutes())}:${pad(nowObj.getSeconds())}`;

    // Mark update time for watchdog
    state.lastUpdateReceivedTime = Date.now();
    
    if (state.activeTab === "offline-devices" || oldConnStatus !== "online") {
      renderOfflineDevicesTable();
    }
    
    updateDynamicCounters();

    // Map Rotator logic (angle heading direction)
    let angle = 0;
    if (closestIdx < pts.length - 1) {
      angle = getAngleDegrees(pts[closestIdx], pts[closestIdx + 1]);
    } else if (closestIdx > 0) {
      angle = getAngleDegrees(pts[closestIdx - 1], pts[closestIdx]);
    }

    // Active tracking updates
    if (tripId === state.activeTripId) {
      if (mapInstance && carMarker) {
        carMarker.setLatLng([payload.lat, payload.lng]);
        
        const carRotator = document.getElementById("marker-car-rotator");
        if (carRotator) {
          carRotator.style.transform = `rotate(${90 - angle}deg)`;
        }
      }

      drawPolylines();

      if (state.lockMap && mapInstance) {
        mapInstance.panTo([payload.lat, payload.lng]);
      }

      repopulateMilestones(tripId);
      renderTimelineUI();
      updateTelemetryUIElements();

      const totalSteps = pts.length;
      const pct = (closestIdx / (totalSteps - 1)) * 100;
      const isCompleted = closestIdx >= totalSteps - 1 || tripState.status === "completed";
      assessActiveTrackingTriggers(pct, isCompleted);
    }

    renderFleetCardsList();

    if (mapInstance) {
      if (!state.activeTripId || !state.isTrackingActive) {
        drawMapLayers();
      }
    }
  }

  // --- Assess triggers for the active tracked trip ---
  function assessActiveTrackingTriggers(percentage, isCompleted) {
    const tripId = state.activeTripId;
    const tripState = state.trips[tripId];
    const meta = DEVICES_METADATA[tripId];
    
    let statusText = "Deploying";
    
    const hours = new Date().getHours().toString().padStart(2, '0');
    const mins = new Date().getMinutes().toString().padStart(2, '0');
    const curTime = `${hours}:${mins}`;

    if (isCompleted) {
      statusText = "Completed / Returned";
      if (tripState.status !== "completed") {
        tripState.status = "available"; // mark available when lease complete/returned
      }
      
      const logText = `INFO: Device returned to depot at ${curTime}.`;
      if (!meta.activityLogs.includes(logText)) {
        meta.activityLogs.unshift(logText);
        addChatBubble(`System: Device deployment lease ended. Asset returned to local repository.`, "system");
        if (meta.customer) {
          addChatBubble(`${meta.customer.name}: I have completed my rental and returned the device. Thanks!`, "driver");
        }
        showToast("Device Returned", "Device lease/rental period completed.", "success");
      }
    } else if (percentage >= 90) {
      statusText = "Deployment Ending";
      const logText = `INFO: Approaching lease destination checkpoint at ${curTime}.`;
      if (!meta.activityLogs.some(l => l.includes("Approaching lease destination"))) {
        meta.activityLogs.unshift(logText);
        if (meta.customer) {
          addChatBubble(`${meta.customer.name}: I am returning the device to the warehouse now.`, "driver");
        }
      }
    } else if (percentage > 50) {
      statusText = "Midway Lease";
      const logText = `INFO: Mid-term health ping passed at ${curTime}. Battery: ${tripState.battery}%.`;
      if (!meta.activityLogs.some(l => l.includes("Mid-term health ping"))) {
        meta.activityLogs.unshift(logText);
      }
    } else if (percentage > 10) {
      statusText = "Active Lease";
      const logText = `INFO: Device in transit with holder at ${curTime}.`;
      if (!meta.activityLogs.some(l => l.includes("Device in transit with holder"))) {
        meta.activityLogs.unshift(logText);
      }
    }

    DOM.headerTripStatus.textContent = statusText;
  }

  // --- Dynamic Chat Helpers ---
  function addChatBubble(message, sender = "info", customClass = "") {
    if (!DOM.chatMessages) return;
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender} ${customClass}`;
    
    if (sender === "system") {
      bubble.innerHTML = message;
    } else {
      bubble.textContent = message;
    }

    DOM.chatMessages.appendChild(bubble);
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
  }

  // --- Toast Notifications System ---
  function showToast(title, description, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let iconStr = "info";
    if (type === "success") iconStr = "check-circle";
    else if (type === "warning") iconStr = "alert-triangle";
    else if (type === "danger") iconStr = "alert-octagon";

    toast.innerHTML = `
      <i data-lucide="${iconStr}" class="toast-icon"></i>
      <div class="toast-content">
        <span class="toast-title">${escapeHTML(title)}</span>
        <span class="toast-desc">${escapeHTML(description)}</span>
      </div>
      <button class="toast-close" aria-label="Close Notification">
        <i data-lucide="x"></i>
      </button>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    const dismissTimer = setTimeout(() => {
      dismissToast(toast);
    }, 4500);

    toast.querySelector(".toast-close").addEventListener("click", () => {
      clearTimeout(dismissTimer);
      dismissToast(toast);
    });
  }

  function dismissToast(toast) {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }

  function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // --- Sign Up Form Handler ---
  function handleSignupSubmit(e) {
    e.preventDefault();

    const errorBox = document.getElementById("signup-error-msg");
    const errorText = document.getElementById("signup-error-text");
    const successBox = document.getElementById("signup-success-msg");

    function showSignupError(msg) {
      if (errorBox && errorText) {
        errorText.textContent = msg;
        errorBox.style.display = "flex";
        if (successBox) successBox.style.display = "none";
      }
    }

    function clearSignupError() {
      if (errorBox) errorBox.style.display = "none";
      if (successBox) successBox.style.display = "none";
      document.querySelectorAll("#signup-form .field-error").forEach(el => el.classList.remove("field-error"));
    }

    clearSignupError();

    const accountType   = (document.getElementById("signup-account-type")?.value || "individual");
    const companyName   = document.getElementById("signup-company-name")?.value.trim();
    const fullName      = document.getElementById("signup-fullname")?.value.trim();
    const email         = document.getElementById("signup-email")?.value.trim();
    const phone         = document.getElementById("signup-phone")?.value.trim();
    const deviceCode    = document.getElementById("signup-device-code")?.value.trim().toUpperCase();
    const password      = document.getElementById("signup-password")?.value;
    const confirmPass   = document.getElementById("signup-confirm-password")?.value;
    const termsChecked  = document.getElementById("signup-terms")?.checked;

    // --- Validation ---
    if (accountType === "company" && !companyName) {
      showSignupError("Please enter your Company Name.");
      document.getElementById("signup-company-name")?.classList.add("field-error");
      return;
    }
    if (!fullName) {
      showSignupError(accountType === "company" ? "Please enter the Contact Person Name." : "Please enter your Full Name.");
      document.getElementById("signup-fullname")?.classList.add("field-error");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showSignupError("Please enter a valid email address.");
      document.getElementById("signup-email")?.classList.add("field-error");
      return;
    }
    if (!phone || phone.replace(/\D/g, "").length < 8) {
      showSignupError("Please enter a valid phone number (at least 8 digits).");
      document.getElementById("signup-phone")?.classList.add("field-error");
      return;
    }
    // Device Code: must match valid format and exist in active device database (DEVICES_METADATA)
    let foundTripId = null;
    let matchedDevice = null;
    if (accountType === "individual") {
      if (!deviceCode) {
        showSignupError("Please enter a Device Tracking Code or Serial Number.");
        document.getElementById("signup-device-code")?.classList.add("field-error");
        return;
      }

      const deviceCodeRegex = /^(DEV|SN)-[A-Z0-9-]+$/i;
      if (!deviceCodeRegex.test(deviceCode)) {
        showSignupError("Invalid Device Code format. Use format DEV-XXXX or SN-XXXX.");
        document.getElementById("signup-device-code")?.classList.add("field-error");
        return;
      }

      // Check if device code or serial number exists in DEVICES_METADATA
      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const d = DEVICES_METADATA[tripId];
        if (d && (
          (d.id && d.id.toUpperCase() === deviceCode) ||
          (d.serialNumber && d.serialNumber.toUpperCase() === deviceCode)
        )) {
          foundTripId = tripId;
          matchedDevice = d;
        }
      });

      if (!foundTripId || !matchedDevice) {
        showSignupError("Device Code/Serial Number Not Found. Please enter a valid registered device code.");
        document.getElementById("signup-device-code")?.classList.add("field-error");
        return;
      }

      // Check if device is available and not linked/assigned to another account
      const userAccounts = getUserAccounts();
      const isLinkedToOtherAccount = userAccounts.some(acc => 
        acc.email.toLowerCase() !== email.toLowerCase() && (
          (acc.deviceCode && acc.deviceCode.toUpperCase() === matchedDevice.id.toUpperCase()) ||
          (acc.serialNumber && acc.serialNumber.toUpperCase() === matchedDevice.serialNumber.toUpperCase())
        )
      );
      
      const isLinkedToOtherCustomer = matchedDevice.customer && 
                                      matchedDevice.customer.email && 
                                      matchedDevice.customer.email.toLowerCase() !== email.toLowerCase();

      if (isLinkedToOtherCustomer || isLinkedToOtherAccount) {
        showSignupError("This device is already assigned or linked to another account.");
        document.getElementById("signup-device-code")?.classList.add("field-error");
        return;
      }

      const isAssignedToSelf = matchedDevice.customer && 
                               matchedDevice.customer.email && 
                               matchedDevice.customer.email.toLowerCase() === email.toLowerCase();

      if (matchedDevice.status !== "available" && !isAssignedToSelf) {
        showSignupError(`This device is not available for registration (current status: ${matchedDevice.status}).`);
        document.getElementById("signup-device-code")?.classList.add("field-error");
        return;
      }
    }
    if (!password || password.length < 8) {
      showSignupError("Password must be at least 8 characters long.");
      document.getElementById("signup-password")?.classList.add("field-error");
      return;
    }
    if (password !== confirmPass) {
      showSignupError("Passwords do not match. Please re-enter.");
      document.getElementById("signup-confirm-password")?.classList.add("field-error");
      return;
    }
    if (!termsChecked) {
      showSignupError("You must accept the Terms of Service and Privacy Policy to continue.");
      return;
    }

    // --- Loading State ---
    const btn     = document.getElementById("btn-signup-submit");
    const btnText = document.getElementById("btn-signup-text");
    const spinner = document.getElementById("signup-spinner");
    if (btn && btnText && spinner) {
      btn.disabled = true;
      btnText.style.display = "none";
      spinner.style.display = "block";
    }

    // --- Simulate API call ---
    setTimeout(() => {
      if (btn && btnText && spinner) {
        btn.disabled = false;
        btnText.style.display = "block";
        spinner.style.display = "none";
      }

      // Show success
      if (successBox) successBox.style.display = "flex";

      // Mark device code input as success
      const deviceInput = document.getElementById("signup-device-code");
      if (deviceInput) {
        deviceInput.classList.remove("field-error");
        deviceInput.classList.add("field-success");
      }

      // Save user to local storage (only details, do not set logged in email session)
      localStorage.setItem("gr_signup_name", fullName);
      localStorage.setItem("gr_signup_phone", phone);

      // Find or generate Customer ID
      const newlyAdded = JSON.parse(localStorage.getItem("gr_newly_added_customers") || "[]");
      const existingCustIdx = newlyAdded.findIndex(c => c.email.toLowerCase() === email.toLowerCase());
      
      let finalCustId;
      let finalAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop";
      
      if (existingCustIdx !== -1) {
        finalCustId = newlyAdded[existingCustIdx].customerId;
        finalAvatar = newlyAdded[existingCustIdx].avatar || finalAvatar;
        newlyAdded[existingCustIdx].name = fullName;
        newlyAdded[existingCustIdx].phone = phone;
        newlyAdded[existingCustIdx].deviceCode = matchedDevice ? matchedDevice.id : "";
        newlyAdded[existingCustIdx].serialNumber = matchedDevice ? matchedDevice.serialNumber : "";
      } else {
        const custIndex = getNextCustomerIndex();
        finalCustId = `CUST-${String(custIndex).padStart(4, '0')}`;
        
        newlyAdded.push({
          customerId: finalCustId,
          name: fullName,
          email: email,
          phone: phone,
          deviceCode: matchedDevice ? matchedDevice.id : "",
          serialNumber: matchedDevice ? matchedDevice.serialNumber : "",
          avatar: finalAvatar
        });
      }
      localStorage.setItem("gr_newly_added_customers", JSON.stringify(newlyAdded));

      // Sync with gr_user_accounts on signup
      const userAccounts = getUserAccounts();
      const existingIdx = userAccounts.findIndex(acc => acc.email.toLowerCase() === email.toLowerCase());
      if (existingIdx !== -1) {
        userAccounts[existingIdx].name = fullName;
        userAccounts[existingIdx].phone = phone;
        userAccounts[existingIdx].password = password;
        userAccounts[existingIdx].deviceCode = matchedDevice ? matchedDevice.id : "";
        userAccounts[existingIdx].serialNumber = matchedDevice ? matchedDevice.serialNumber : "";
      } else {
        userAccounts.push({
          name: fullName,
          email: email,
          phone: phone,
          deviceCode: matchedDevice ? matchedDevice.id : "",
          serialNumber: matchedDevice ? matchedDevice.serialNumber : "",
          password: password,
          status: "active"
        });
      }
      localStorage.setItem("gr_user_accounts", JSON.stringify(userAccounts));

      // Dynamically assign the physical device if valid code was entered
      if (accountType === "individual" && foundTripId && matchedDevice) {
        DEVICES_METADATA[foundTripId].customer = {
          customerId: finalCustId,
          name: fullName,
          phone: phone,
          email: email,
          avatar: finalAvatar
        };
        DEVICES_METADATA[foundTripId].status = "assigned";
        if (state.trips[foundTripId]) {
          state.trips[foundTripId].status = "assigned";
        }
        savePersistedAssignments();
      }

      // Display confirmation message and redirect to login page
      const successText = document.getElementById("signup-success-text");
      if (successText) {
        successText.textContent = "Account Created Successfully. Please log in to continue.";
      }
      if (successBox) successBox.style.display = "flex";

      showToast("Account Created", "Account Created Successfully. Please log in to continue.", "success");

      // Redirect back to Login Page after short delay
      setTimeout(() => {
        if (signupForm) signupForm.reset();
        if (deviceInput) deviceInput.classList.remove("field-success", "field-error");
        if (successBox) successBox.style.display = "none";
        
        const signupSection = document.getElementById("signup-view-section");
        const loginSection = document.getElementById("login-view-section");
        if (signupSection && loginSection) {
          signupSection.style.display = "none";
          loginSection.style.display = "block";
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }
      }, 2500);

    }, 1200);
  }

  // --- Start Trigger ---
  window.addEventListener("DOMContentLoaded", init);

})();
