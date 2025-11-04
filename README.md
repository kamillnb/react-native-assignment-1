 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 5684b92cd9a91dfecf74fae6e49920902e0f1d25..ebafd584e91c8ff4252dccab5a76bccf5ab22d4f 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,101 @@
-# react-native-assignment-1
\ No newline at end of file
+# React Native Assignment Guide
+
+This repository is a checklist and logbook for completing the React Native CLI assignment. Follow the steps below in order and document your progress so you can submit a complete report to your instructor.
+
+## 1. Prepare Your Environment
+
+### 1.1 Install Prerequisites
+Record the commands you run and capture screenshots of successful installations.
+
+- **Node.js & npm**
+  - Install Node 18 LTS or newer. Example (macOS/Linux): `nvm install --lts && nvm use --lts`.
+  - Verify: `node -v` and `npm -v`.
+- **Watchman (macOS/Linux)**
+  - macOS: `brew install watchman`
+  - Ubuntu: `sudo apt install watchman`
+  - Verify: `watchman -v`
+- **Java Development Kit (Android)**
+  - Install Android Studio (includes OpenJDK). Take a screenshot of the SDK Manager showing installed SDKs.
+  - Set `ANDROID_HOME` (e.g., `export ANDROID_HOME=$HOME/Library/Android/sdk`).
+  - Verify: `java -version` and `adb version`.
+- **Xcode (iOS, macOS only)**
+  - Install from the App Store, accept licenses (`sudo xcodebuild -license`).
+  - Verify: `xcodebuild -version`.
+- **Windows-only**
+  - Install Chocolatey, then `choco install -y nodejs-lts openjdk11`.
+  - Configure `ANDROID_HOME` in System Environment Variables.
+
+> 📸 **Document**: Screenshot of each tool’s successful installation/output and a list of the commands you executed.
+
+## 2. Create the React Native Project
+
+1. Open a terminal and run:
+   ```bash
+   npx react-native init AwesomeProject
+   cd AwesomeProject
+   ```
+2. Commit the initial scaffold to your repository.
+3. Note the React Native version (`npx react-native --version`).
+
+> 📸 **Document**: Screenshot of the terminal after project creation and the folder structure in your code editor.
+
+## 3. Run the App in Simulators
+
+### 3.1 Android Emulator
+1. Open Android Studio → **Device Manager** → create a virtual device.
+2. Start the emulator.
+3. In one terminal: `npx react-native start`.
+4. In another terminal: `npx react-native run-android`.
+5. Wait for the build to finish and the app to load in the emulator.
+
+### 3.2 iOS Simulator (macOS)
+1. In the project root: `npx react-native run-ios`.
+2. Alternatively, open `ios/AwesomeProject.xcworkspace` in Xcode and press **Run**.
+
+> 📸 **Document**: Screenshot (or screen recording) of the app running in each simulator and copy the key build commands you used.
+
+## 4. Install on Physical Devices
+
+### 4.1 Android Device
+1. Enable **Developer Options** and **USB debugging** on your phone.
+2. Connect via USB and authorize the computer.
+3. Run `adb devices` to confirm the connection.
+4. Install the app with `npx react-native run-android` (debug) or `--variant release`.
+5. Optional: set up wireless debugging (`adb tcpip 5555` and `adb connect <device-ip>`).
+
+### 4.2 iOS Device (macOS)
+1. Connect your device and open the Xcode workspace.
+2. In **Signing & Capabilities**, choose your Apple ID Team (free developer account works).
+3. Select your device as the run target and press **Run**.
+4. Approve the developer certificate on the device if prompted.
+
+> 📸 **Document**: Photo/screenshot of the app running on each physical device, plus the output of `adb devices` or the Xcode build log.
+
+## 5. Debugging & Breakpoints
+
+1. Start Metro: `npx react-native start`.
+2. Open the in-app developer menu:
+   - Android: `Cmd+M` (macOS), `Ctrl+M` (Windows), or shake the device.
+   - iOS: `Cmd+D` in the simulator or shake the device.
+3. Choose **Open Debugger** (Chrome) or launch **React Native Debugger**.
+4. Set breakpoints in the Sources panel and reload the app.
+5. Inspect variables via the console, watch expressions, and React DevTools.
+6. Demonstrate Fast Refresh or Hot Reload in action.
+
+> 📸 **Document**: Screenshot of the breakpoint hit in the debugger, console output showing variable values, and notes on any issues encountered.
+
+## 6. Final Submission Package
+
+Prepare a document (Markdown, PDF, or Google Doc) that includes:
+
+- Environment setup steps, commands, and screenshots.
+- Screenshots/videos of the app running on simulators and devices.
+- Debugging evidence (breakpoints, logs).
+- Any challenges faced and how you solved them.
+- Link to this repository (with commits pushed) so the instructor can review your project history.
+
+Optional additions:
+- Record short screen captures while running key steps.
+- Include `adb logcat` or Xcode console snippets if you troubleshooted issues.
+
+Good luck! Reach out if you need help with any step.
 
EOF
)