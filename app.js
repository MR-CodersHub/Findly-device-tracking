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
      id: "DEV-P15-12",
      serialNumber: "SN-P15-3891",
      category: "Audio/Visual",
      status: "assigned",
      purchaseDate: "2024-11-05",
      rentalDate: "2026-05-10",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2024-11-05 by Findly Assets.",
      rentalHistory: "Leased to Devon Lane for HITEC Tech Conference 2026.",
      locationNames: ["HITEC City Mall", "Madhapur Metro", "Jubilee Hills Road", "Banjara Hills Rd 12", "Panjagutta Junction", "Begumpet Airport", "Secunderabad Junction"],
      customer: {
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
      id: "DEV-L22-09",
      serialNumber: "SN-L22-8094",
      category: "Electronics",
      status: "rented",
      purchaseDate: "2025-03-12",
      rentalDate: "2026-06-01",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2025-03-12.",
      rentalHistory: "Leased to Cyberdyne Systems Financial District.",
      locationNames: ["Gachibowli Stadium", "Financial District Hub", "Narsingi ORR", "Kokapet Lake", "Rajendranagar Area", "Shamshabad Toll Gate", "RGIA Airport"],
      customer: {
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
      id: "DEV-A01-03",
      serialNumber: "SN-A01-1029",
      category: "Lighting",
      status: "maintenance",
      purchaseDate: "2025-01-20",
      rentalDate: "2026-04-15",
      warrantyStatus: "Active",
      purchaseHistory: "Purchased on 2025-01-20.",
      rentalHistory: "Rented to Marcus Wright.",
      locationNames: ["Secunderabad Clock Tower", "Mushirabad Market", "Koti Commercial Hub", "Charminar Monument", "Bahadurpura Zoo", "Nampally Station"],
      customer: {
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
      id: "DEV-G08-44",
      serialNumber: "SN-G08-9230",
      category: "Equipment",
      status: "missing",
      purchaseDate: "2024-05-18",
      rentalDate: "2026-02-12",
      warrantyStatus: "Expired",
      purchaseHistory: "Purchased on 2024-05-18.",
      rentalHistory: "Assigned to Hyderabad Survey Team.",
      locationNames: ["JNTU Kukatpally", "Moosapet Metro", "Erragadda Hospital", "Ameerpet Crossing", "Khairatabad Flyover", "Necklace Road Lakefront"],
      customer: {
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
      id: "DEV-C05-99",
      serialNumber: "SN-C05-3098",
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

    // Independent Device Telemetries States
    trips: {
      "trip-1": { currentStepIndex: 0, elapsedSeconds: 0, battery: 95, status: "assigned", locationName: "Determining..." },
      "trip-2": { currentStepIndex: 0, elapsedSeconds: 0, battery: 88, status: "rented", locationName: "Determining..." },
      "trip-3": { currentStepIndex: 0, elapsedSeconds: 0, battery: 32, status: "maintenance", locationName: "Determining..." },
      "trip-4": { currentStepIndex: 0, elapsedSeconds: 0, battery: 18, status: "missing", locationName: "Determining..." },
      "trip-5": { currentStepIndex: 0, elapsedSeconds: 0, battery: 100, status: "available", locationName: "Determining..." }
    },
    
    lastPingSecondsAgo: 0
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
      customersGridContainer: document.getElementById("customers-grid-container")
    };
  }

  // --- Initialize App ---
  function init() {
    loadDOMReferences();

    // 1. Theme Configuration
    const cachedTheme = localStorage.getItem("gr_theme");
    if (cachedTheme) {
      state.theme = cachedTheme;
    }
    document.body.className = state.theme;

    // 2. Setup pre-filled steps
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
      
      state.trips[tripId] = {
        currentStepIndex: initialStep,
        elapsedSeconds: 0,
        battery: tripId === "trip-4" ? 18 : (tripId === "trip-3" ? 32 : (tripId === "trip-2" ? 88 : 98)),
        locationName: meta.locationNames[0],
        status: initStatus
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

  // --- Tab Switching Logic ---
  function switchTab(tabId) {
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
      "live-tracking": "Device Tracking",
      "devices": "Devices",
      "customers": "Customers",
      "history": "History",
      "alerts": "Alerts",
      "settings": "Settings"
    };
    const mobileTitleEl = document.getElementById("mobile-page-title");
    if (mobileTitleEl && pageTitles[tabId]) {
      mobileTitleEl.textContent = pageTitles[tabId];
    }

    // Hide all drawer overlay modals
    const viewIds = ["devices", "customers", "history", "alerts", "settings"];
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
      }
    }
  }

  // --- Show Fleet Overview Panel A ---
  function showFleetOverviewPanel() {
    if (DOM.floatingTelemetryPanel) {
      DOM.floatingTelemetryPanel.style.display = "none";
    }
    renderFleetCardsList();
  }

  // --- Show Active Telemetry Panel B ---
  function showActiveTrackingPanel() {
    if (DOM.floatingTelemetryPanel) {
      DOM.floatingTelemetryPanel.style.display = "flex";
    }

    const tripId = state.activeTripId;
    const meta = DEVICES_METADATA[tripId];
    const tripState = state.trips[tripId];
    
    if (DOM.trackingVehiclePlate) DOM.trackingVehiclePlate.textContent = meta.name;
    if (DOM.trackingVehicleStatus) {
      DOM.trackingVehicleStatus.textContent = tripState.status;
      DOM.trackingVehicleStatus.className = `status-badge ${tripState.status}`;
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
      if (DOM.driverName) DOM.driverName.textContent = customer.name;
      if (DOM.driverVehicle) DOM.driverVehicle.textContent = meta.serialNumber;
      if (DOM.driverPlateDetails) DOM.driverPlateDetails.textContent = customer.email;
      if (DOM.driverPhone) DOM.driverPhone.textContent = customer.phone;
      if (DOM.btnCallDriver) DOM.btnCallDriver.href = `tel:${customer.phone}`;
      if (DOM.btnToggleChat) DOM.btnToggleChat.style.display = "inline-flex";
    } else {
      if (DOM.driverAvatar) DOM.driverAvatar.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop";
      if (DOM.driverName) DOM.driverName.textContent = "No Assigned Holder";
      if (DOM.driverVehicle) DOM.driverVehicle.textContent = meta.serialNumber;
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
    const list = Object.keys(DEVICES_METADATA).filter(tripId => {
      const meta = DEVICES_METADATA[tripId];
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

      return `
        <div class="fleet-card ${isTrackingThis ? 'active-tracking' : ''} ${missingClass}" data-trip-id="${tripId}">
          <div class="fleet-card-header">
            <span class="fleet-card-vehicle">${meta.name}</span>
            <span class="status-badge ${tripState.status}">${tripState.status}</span>
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
      DOM.floatingTelemetryPanel.style.display = "none";
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

  // --- Render Sub-views ---
  function renderDevicesInventoryTable() {
    const tripIds = Object.keys(DEVICES_METADATA);

    DOM.devicesTableBody.innerHTML = tripIds.map(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const tripState = state.trips[tripId];
      
      let batteryClass = "success";
      if (tripState.battery <= 20) { batteryClass = "danger"; }
      else if (tripState.battery <= 50) { batteryClass = "warning"; }
      else if (tripState.battery <= 80) { batteryClass = "info"; }

      const holderName = meta.customer ? meta.customer.name : "Unassigned";

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
          <td><span class="status-badge ${tripState.status}">${tripState.status}</span></td>
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

        const holderName = meta.customer ? meta.customer.name : "Unassigned";
        
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
              <span class="status-badge ${tripState.status}">${tripState.status}</span>
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
    const devicesWithCustomers = Object.keys(DEVICES_METADATA).filter(tripId => DEVICES_METADATA[tripId].customer !== null);
    DOM.customersGridContainer.innerHTML = devicesWithCustomers.map(tripId => {
      const meta = DEVICES_METADATA[tripId];
      const tripState = state.trips[tripId];
      const customer = meta.customer;

      const isOnline = tripState.status !== "missing";

      return `
        <div class="driver-profile-card">
          <div class="driver-profile-header">
            <img src="${customer.avatar}" alt="${customer.name}" class="driver-profile-avatar">
            <div class="driver-profile-info">
              <span class="driver-profile-name">${customer.name}</span>
            </div>
            <span class="driver-profile-status ${isOnline ? 'online' : 'offline'}">${isOnline ? 'Active' : 'Missing'}</span>
          </div>

          <div class="driver-profile-stats">
            <div class="driver-stat">
              <span class="driver-stat-label">Leased Device</span>
              <span class="driver-stat-val" style="font-size:0.65rem;">${meta.name}</span>
            </div>
            <div class="driver-stat">
              <span class="driver-stat-label">Serial Number</span>
              <span class="driver-stat-val" style="font-size:0.65rem;">${meta.serialNumber}</span>
            </div>
            <div class="driver-stat" style="grid-column: span 2; margin-top: 4px; border-top: 1px solid var(--border-color); padding-top: 4px;">
              <span class="driver-stat-label">Lease Status</span>
              <span class="driver-stat-val" style="font-size:0.65rem;">${tripState.status.toUpperCase()}</span>
            </div>
          </div>

          <div class="driver-profile-actions">
            <a href="tel:${customer.phone}" class="btn btn-secondary btn-sm" style="flex:1;">
              <i data-lucide="phone" style="width:12px; height:12px;"></i> Call
            </a>
            <button class="btn btn-secondary btn-sm driver-msg-btn" data-trip-id="${tripId}" style="flex:1;">
              <i data-lucide="message-square" style="width:12px; height:12px;"></i> Chat
            </button>
          </div>
        </div>
      `;
    }).join("");

    lucide.createIcons();

    DOM.customersGridContainer.querySelectorAll(".driver-msg-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tripId = btn.getAttribute("data-trip-id");
        startTrackingVehicle(tripId);
        setTimeout(() => {
          DOM.chatInput.focus();
        }, 300);
      });
    });
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

  // --- Add Event Listeners ---
  function setupEventListeners() {
    // Theme switches
    if (DOM.themeToggleLogin) DOM.themeToggleLogin.addEventListener("click", toggleTheme);
    if (DOM.themeToggleApp) DOM.themeToggleApp.addEventListener("click", toggleTheme);

    // Login Form Submit Check
    if (DOM.loginForm) DOM.loginForm.addEventListener("submit", handleLoginSubmit);

    // Password Eye Toggler
    if (DOM.passwordToggle) DOM.passwordToggle.addEventListener("click", togglePasswordVisibility);

    // Logout Action
    if (DOM.btnLogout) {
      DOM.btnLogout.addEventListener("click", () => {
        localStorage.removeItem("gr_logged_in");
        showLoginScreen();
        showToast("Signed Out", "You have been logged out of the session.", "info");
      });
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

    // Chat dialogue window toggles
    if (DOM.btnToggleChat && DOM.floatingChatPopup) {
      DOM.btnToggleChat.addEventListener("click", () => {
        const isHidden = DOM.floatingChatPopup.style.display === "none" || !DOM.floatingChatPopup.style.display;
        DOM.floatingChatPopup.style.display = isHidden ? "flex" : "none";
        if (isHidden && DOM.chatInput) {
          DOM.chatInput.focus();
        }
      });
    }

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
    panel.style.transform = "translateY(0)";
    isSheetExpanded = true;
  }

  function collapseBottomSheet() {
    const panel = document.getElementById("floating-telemetry-panel");
    if (!panel) return;
    panel.classList.remove("expanded");
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

    if (!email) {
      showLoginError("Please enter your email or mobile number");
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

    // Simulate quick loading and redirect immediately
    setTimeout(() => {
      if (DOM.btnLoginSubmit && DOM.btnLoginText && DOM.loginSpinner) {
        DOM.btnLoginSubmit.disabled = false;
        DOM.btnLoginText.style.display = "block";
        DOM.loginSpinner.style.display = "none";
      }
      
      handleSuccessfulLogin();
    }, 100);
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
  function getDeviceMarkerHtml(category, status, size = 28) {
    const isMissing = status === "missing";
    const accentColor = isMissing ? "#ef4444" : (status === "maintenance" ? "#f59e0b" : (status === "available" ? "#3b82f6" : "#22c55e"));
    
    let iconName = "cpu";
    if (category === "Electronics") iconName = "laptop";
    else if (category === "Audio/Visual") iconName = "video";
    else if (category === "Lighting") iconName = "lightbulb";
    else if (category === "Photography") iconName = "camera";
    else if (category === "Equipment") iconName = "wrench";

    if (isMissing) {
      iconName = "alert-triangle";
    }

    const shadowClass = isMissing ? "pulsing-missing-marker" : "";
    const sizeStyle = `width:${size}px; height:${size}px;`;
    const iconSize = size - 14;

    return `
      <div class="custom-car-marker ${shadowClass}" style="overflow:visible; display:flex; align-items:center; justify-content:center; ${sizeStyle}">
        <div id="marker-car-rotator" style="background-color:${accentColor}; color:#000; border:2px solid var(--bg-secondary); border-radius:50%; width:${size - 2}px; height:${size - 2}px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px ${accentColor}; transform:rotate(0deg); transition:transform 0.15s ease;">
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
      
      Object.keys(DEVICES_METADATA).forEach(tripId => {
        const meta = DEVICES_METADATA[tripId];
        const pts = INTERPOLATED_TRIPS[tripId];
        const tripState = state.trips[tripId];
        const currentLoc = (tripState.lat && tripState.lng) ? [tripState.lat, tripState.lng] : pts[tripState.currentStepIndex];

        const fleetIcon = L.divIcon({
          html: getDeviceMarkerHtml(meta.category, tripState.status, 28),
          className: 'custom-car-icon',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const holderName = meta.customer ? meta.customer.name : "No Assigned Holder";

        const popupContent = `
          <div style="font-family:var(--font-sans); font-size:0.75rem; color:var(--text-primary); line-height:1.4; padding:2px;">
            <div style="font-weight:800; border-bottom:1px solid var(--border-color); padding-bottom:4px; margin-bottom:4px; display:flex; justify-content:space-between; align-items:center;">
              <span>${meta.name}</span>
              <span class="status-badge ${tripState.status}" style="font-size:0.55rem; padding:1px 4px;">${tripState.status}</span>
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
        html: getDeviceMarkerHtml(meta.category, tripState.status, 32),
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
    DOM.connectionStatus.className = `connection-status-pill ${status}`;
    DOM.connectionStatusText.textContent = label;
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

    // Update state variables
    tripState.lat = payload.lat;
    tripState.lng = payload.lng;
    tripState.currentStepIndex = closestIdx;
    tripState.speed = payload.speed || 0;
    tripState.status = payload.status || "active";
    tripState.distanceRemaining = payload.distanceRemaining !== undefined ? payload.distanceRemaining : 0;
    tripState.etaMins = payload.etaMins !== undefined ? payload.etaMins : 0;
    tripState.locationName = payload.locationName || "Unknown Landmark";

    // Mark update time for watchdog
    state.lastUpdateReceivedTime = Date.now();

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

  // --- Start Trigger ---
  window.addEventListener("DOMContentLoaded", init);

})();
