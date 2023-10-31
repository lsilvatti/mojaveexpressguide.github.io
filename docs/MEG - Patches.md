---
sidebar_position: 12
---

# MEG - Patches and Tweaks

---

As you did with **Viva New Vegas** create new separators for the above categories.

### [NV Compatibility Skeleton](https://www.nexusmods.com/newvegas/mods/68776)

A skeleton with compatibility for the latest mods

:::info On the left pane in MO2:

Drag **NV Compatibility Skeleton** installed previously from **Viva New Vegas** below the newly created separator. This mod should be as low as possible in your modlist.

:::


### [Consistent Pip-Boy Icons v4](https://www.nexusmods.com/newvegas/mods/65046?tab=files)

This is a lore-friendly, mostly hand-drawn, total overhaul mod that tweaks around 3600 icons.

**Installation:**

**- Main Files - CPI - Mod Patches**

:::info In the installer:

[Consistent Pip-Boy Icons - Mod Patches]

- Keep the default boxes checked

:::

## MEG - Patches

This will contain all the patches you need for the Mojave Express Guide.

**Installation:**

- **Main Files - [MEG - Patches](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::info In the installer:

Pick the **patches** that are relevant to you. Read the requirements carefully.

**List of mods with patches included in the installer:**

- Vanilla Enhancements

- Uncut Wasteland

- B42 Dropmag

- Character Expansions Revised

- FPGE Patches

**>Install**

:::

<br />


## MEG - Tweaks

My custom set of tweaks that I use.

**Installation:**

- **Main Files - [MEG - Tweaks](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::info In the installer:

Pick the **tweaks** that you would like and make sure to read the description of them in the FOMOD:

**List of tweaks included in the installer:**

- MEG - JIP LN NVSE Config

- MEG - Stewie Tweaks Config

- MEG - Iron Sights Aligned Config

- ​MEG - Helmet Armor Rebalance (JIP)

- MEG - JAM Config

- MEG - Aim Down Sights Config

- MEG - Contextual HUD Config

**>Install**

:::


## MEG - Navmesh Compatibility Patch

This is a premade Navmesh Compatibility Patch for Mojave Express. This requires YUP, AWLOP, NVInteriors, New Vegas Landscape Overhaul Re-Remastered, The Living Desert, Uncut Wasteland, Vanilla Enhancements, New Vegas Killer, New Vegas Bounties, Lucky Jim's Cache, Mobile Crate Truck Remastered, Sweets Pain NV, Home and Safehouse Tweaks, Uncut Wasteland - NVInteriors Remastered Patch.

**Installation:**

- **Main Files - [MEG - Navmesh Compatibility Patch](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::tip Note:

If you download this then disable **VNV Extended Navmesh Patch** and **YUP Navmesh Overhaul Patch** if you have them from **VNV**.

If you do not have all of the selected mods or plan to add more please create your own navmesh compatibility patch using the guide on this page: **[Improved AI (Navmesh Overhaul Mod)](https://www.nexusmods.com/newvegas/mods/81003)**

:::

## MEG - LOD

This step is optional but below is pre-generated LOD for Mojave Express using all the mods in the guide with vanilla textures. You need to have have **[New Vegas Landscape Overhaul Re-Remastered](https://www.nexusmods.com/newvegas/mods/74218?tab=files)** installed for this to work properly. You will need the below resources and their plugins as well. If you have downloaded Viva New Vegas with Wabbajack you should already have the resources, so you just need to disable the **FNVLODGen Output** you have in **MO2** and then download and install the **[Mojave Express - FNVLODGen Output](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**.

:::tip Note: 

If you have added additional mods that require LOD or use texture mods then it is highly recommended to generate your own LOD from [LOD Guide](https://vivanewvegas.moddinglinked.com/lod.html) instead.

:::

**Installation:**

- **Main Files - [FNVLODGen Resources](https://www.nexusmods.com/newvegas/mods/58562?tab=files)**

- **Main Files - [LODadditions](https://www.nexusmods.com/newvegas/mods/61206?tab=files)**

- **Main Files - [TCM's LOD Overhaul](https://www.nexusmods.com/newvegas/mods/70155?tab=files)**
 
- **Main Files - [More LODs Additions and fixes](https://www.nexusmods.com/newvegas/mods/81751?tab=files)**

- **Main FIles - [Wasted LOD - Cliffs of Mojave](https://www.nexusmods.com/newvegas/mods/83316?tab=files)**

- **Optional Files - [Mojave Express - FNVLODGen Output](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

<br />

```ini title="To increase LOD Draw Distance add these settings to falloutcustom.ini:"

[TerrainManager]
; Increases the maximum distance of LOD  
fBlockLoadDistanceLow=100000  
fBlockLoadDistance=250000  

[SpeedTree]
; Makes flora use the full objects instead of LOD, this negates pop-in  
bForceFullLOD=1  

```
