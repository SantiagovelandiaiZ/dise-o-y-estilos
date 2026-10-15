# App Multi-Vista (React Native + Expo)

Proyecto corregido del Taller Práctico #3. Incluye cuatro vistas navegables desde el menú superior: Inicio, Perfil, Ajustes y Stats.

## Generar el APK desde GitHub Codespaces

1. Sube **el contenido de esta carpeta** a un repositorio de GitHub.
2. Abre un Codespace para ese repositorio.
3. En la terminal ejecuta:

   ```bash
   npm install
   npx expo-doctor
   ```

4. Inicia sesión en Expo si todavía no lo has hecho:

   ```bash
   eas login
   ```

5. Genera el APK:

   ```bash
   eas build --platform android --profile preview
   ```

El perfil `preview` está configurado para generar un archivo `.apk` instalable. La compilación ocurre en los servidores de Expo y requiere conexión a internet y una cuenta de Expo.

## Notas

- El botón «Editar Perfil» es visual y todavía no abre un formulario.
- Los ajustes cambian el estado de los interruptores, pero el modo oscuro no cambia toda la interfaz.
- Las estadísticas son datos de demostración.
