import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Switch,
  ScrollView,
} from 'react-native';

function InicioScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>¡Bienvenido de nuevo!</Text>
        <Text style={styles.heroSub}>Panel de Control Principal</Text>
      </View>

      <Text style={styles.sectionHeader}>Resumen del Día</Text>
      <View style={styles.gridRow}>
        <View style={[styles.statBox, { backgroundColor: '#e0f2fe' }]}>
          <Text style={styles.statNum}>12</Text>
          <Text style={styles.statLabel}>Proyectos</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.statNum}>85%</Text>
          <Text style={styles.statLabel}>Completado</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JS</Text>
      </View>
      <Text style={styles.userName}>Juan Santamaria</Text>
      <Text style={styles.userRole}>Desarrollador React Native</Text>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>Mobile</Text>
        <Text style={styles.tag}>UI/UX</Text>
        <Text style={styles.tag}>Expo</Text>
      </View>
      <Pressable
        style={styles.editBtn}
        onPress={() => {}}
        accessibilityRole="button"
        accessibilityLabel="Editar perfil"
      >
        <Text style={styles.editBtnText}>Editar Perfil</Text>
      </Pressable>
    </View>
  );
}

function AjustesScreen() {
  const [notif, setNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionHeader}>Preferencias de la App</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notificaciones Push</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      {darkMode ? (
        <Text style={styles.helperText}>
          El modo oscuro está activado como preferencia. El tema visual completo aún no cambia.
        </Text>
      ) : null}
      {!notif ? (
        <Text style={styles.helperText}>
          Las notificaciones están desactivadas en esta pantalla de demostración.
        </Text>
      ) : null}
    </ScrollView>
  );
}

function EstadisticasScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionHeader}>Rendimiento Semanal</Text>
      <View style={styles.chartCard}>
        <View style={styles.chartContainer}>
          <View style={styles.barGroup}>
            <View style={[styles.bar, { height: '40%' }]} />
            <Text style={styles.barLabel}>Lun</Text>
          </View>
          <View style={styles.barGroup}>
            <View style={[styles.bar, { height: '75%', backgroundColor: '#0284c7' }]} />
            <Text style={styles.barLabel}>Mar</Text>
          </View>
          <View style={styles.barGroup}>
            <View style={[styles.bar, { height: '55%' }]} />
            <Text style={styles.barLabel}>Mié</Text>
          </View>
          <View style={styles.barGroup}>
            <View style={[styles.bar, { height: '90%', backgroundColor: '#10b981' }]} />
            <Text style={styles.barLabel}>Jue</Text>
          </View>
          <View style={styles.barGroup}>
            <View style={[styles.bar, { height: '60%' }]} />
            <Text style={styles.barLabel}>Vie</Text>
          </View>
        </View>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Tiempo total activo</Text>
        <Text style={styles.totalTime}>38h 15m</Text>
      </View>
    </ScrollView>
  );
}

export default function App() {
  const [vistaActual, setVistaActual] = useState('inicio');

  const renderPantalla = () => {
    switch (vistaActual) {
      case 'inicio':
        return <InicioScreen />;
      case 'perfil':
        return <PerfilScreen />;
      case 'ajustes':
        return <AjustesScreen />;
      case 'stats':
        return <EstadisticasScreen />;
      default:
        return <InicioScreen />;
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>App Multi-Vista</Text>
      </View>

      <View style={styles.topNavBar}>
        <Pressable
          style={[styles.topNavButton, vistaActual === 'inicio' && styles.activeTopNav]}
          onPress={() => setVistaActual('inicio')}
        >
          <Text style={[styles.topNavText, vistaActual === 'inicio' && styles.activeTopNavText]}>
            Inicio
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topNavButton, vistaActual === 'perfil' && styles.activeTopNav]}
          onPress={() => setVistaActual('perfil')}
        >
          <Text style={[styles.topNavText, vistaActual === 'perfil' && styles.activeTopNavText]}>
            Perfil
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topNavButton, vistaActual === 'ajustes' && styles.activeTopNav]}
          onPress={() => setVistaActual('ajustes')}
        >
          <Text style={[styles.topNavText, vistaActual === 'ajustes' && styles.activeTopNavText]}>
            Ajustes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topNavButton, vistaActual === 'stats' && styles.activeTopNav]}
          onPress={() => setVistaActual('stats')}
        >
          <Text style={[styles.topNavText, vistaActual === 'stats' && styles.activeTopNavText]}>
            Stats
          </Text>
        </Pressable>
      </View>

      <View style={styles.bodyContainer}>{renderPantalla()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: { flex: 1, backgroundColor: '#f8fafc' },
  headerBar: { backgroundColor: '#0f172a', paddingVertical: 14, alignItems: 'center' },
  headerTitle: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  bodyContainer: { flex: 1 },
  topNavBar: { flexDirection: 'row', backgroundColor: '#1e293b', padding: 6 },
  topNavButton: { flex: 1, alignItems: 'center', paddingVertical: 8, borderRadius: 6 },
  activeTopNav: { backgroundColor: '#0284c7' },
  topNavText: { fontSize: 12, color: '#94a3b8', fontWeight: '600' },
  activeTopNavText: { color: '#ffffff', fontWeight: 'bold' },
  screenContainer: { flex: 1, padding: 16 },
  heroCard: { backgroundColor: '#0284c7', padding: 18, borderRadius: 12, marginBottom: 16 },
  heroTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  heroSub: { color: '#e0f2fe', marginTop: 4 },
  sectionHeader: { fontSize: 15, fontWeight: 'bold', color: '#0f172a', marginBottom: 10 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statBox: { width: '48%', padding: 16, borderRadius: 12, alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: 'bold', color: '#0f172a' },
  statLabel: { color: '#475569', marginTop: 4, fontSize: 12 },
  profileContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: { color: '#ffffff', fontSize: 24, fontWeight: 'bold' },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#0f172a' },
  userRole: { color: '#64748b', marginBottom: 12 },
  tagContainer: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  tag: {
    backgroundColor: '#e0e7ff',
    color: '#4338ca',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 11,
    fontWeight: '600',
    overflow: 'hidden',
  },
  editBtn: { backgroundColor: '#0f172a', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 6 },
  editBtnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  settingText: { fontSize: 14, color: '#334155', fontWeight: '500' },
  helperText: { fontSize: 12, color: '#64748b', marginBottom: 10 },
  totalTime: { fontWeight: 'bold', color: '#0284c7' },
  chartCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12,
  },
  chartContainer: {
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  barGroup: { alignItems: 'center', height: '100%', justifyContent: 'flex-end', width: 30 },
  bar: { width: 16, backgroundColor: '#cbd5e1', borderRadius: 4 },
  barLabel: { fontSize: 10, color: '#64748b', marginTop: 6 },
});
