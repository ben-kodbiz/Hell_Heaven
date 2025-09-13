
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const QWEN_CODE: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const CXXFLAGS: string;
	export const GCC_RANLIB: string;
	export const XDG_SESSION_TYPE: string;
	export const OBJCOPY: string;
	export const npm_node_execpath: string;
	export const DEBUG_CXXFLAGS: string;
	export const SIZE: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_config_noproxy: string;
	export const LESS: string;
	export const HOME: string;
	export const CC_FOR_BUILD: string;
	export const CONDA_SHLVL: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const ZSH: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const LDFLAGS: string;
	export const OLLAMA_HOST: string;
	export const PAGER: string;
	export const STRINGS: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const CPP: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const COLOR: string;
	export const GNOME_KEYRING_CONTROL: string;
	export const NVM_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const NVCC_PREPEND_FLAGS: string;
	export const ELFEDIT: string;
	export const STRIP: string;
	export const LOGNAME: string;
	export const GCC: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const READELF: string;
	export const XDG_SESSION_CLASS: string;
	export const AR: string;
	export const USERNAME: string;
	export const GXX: string;
	export const TERM: string;
	export const AS: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const CXXFILT: string;
	export const WINDOWPATH: string;
	export const BUILD: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const build_alias: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const CFLAGS: string;
	export const GCC_AR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const DEBUG_CFLAGS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const _CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const CPPFLAGS: string;
	export const CONDA_PYTHON_EXE: string;
	export const SHELL: string;
	export const CMAKE_ARGS: string;
	export const HOST: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const CXX: string;
	export const DEBUG_CPPFLAGS: string;
	export const GDMSESSION: string;
	export const CONDA_DEFAULT_ENV: string;
	export const GPG_AGENT_INFO: string;
	export const ADDR2LINE: string;
	export const GCC_NM: string;
	export const CONDA_BUILD_SYSROOT: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const LD_GOLD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const CONDA_EXE: string;
	export const LD: string;
	export const ANDROID_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const CONDA_BACKUP_HOST: string;
	export const npm_command: string;
	export const GPROF: string;
	export const CONDA_PREFIX: string;
	export const host_alias: string;
	export const CC: string;
	export const RANLIB: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const VTE_VERSION: string;
	export const CXX_FOR_BUILD: string;
	export const CMAKE_PREFIX_PATH: string;
	export const NM: string;
	export const OBJDUMP: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		QWEN_CODE: string;
		CONDA_PROMPT_MODIFIER: string;
		USER: string;
		npm_config_user_agent: string;
		CXXFLAGS: string;
		GCC_RANLIB: string;
		XDG_SESSION_TYPE: string;
		OBJCOPY: string;
		npm_node_execpath: string;
		DEBUG_CXXFLAGS: string;
		SIZE: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_config_noproxy: string;
		LESS: string;
		HOME: string;
		CC_FOR_BUILD: string;
		CONDA_SHLVL: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		LSCOLORS: string;
		NVM_INC: string;
		ZSH: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		LDFLAGS: string;
		OLLAMA_HOST: string;
		PAGER: string;
		STRINGS: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		SYSTEMD_EXEC_PID: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		CPP: string;
		LIBVIRT_DEFAULT_URI: string;
		COLOR: string;
		GNOME_KEYRING_CONTROL: string;
		NVM_DIR: string;
		DEBUGINFOD_URLS: string;
		NVCC_PREPEND_FLAGS: string;
		ELFEDIT: string;
		STRIP: string;
		LOGNAME: string;
		GCC: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		MEMORY_PRESSURE_WATCH: string;
		READELF: string;
		XDG_SESSION_CLASS: string;
		AR: string;
		USERNAME: string;
		GXX: string;
		TERM: string;
		AS: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		CXXFILT: string;
		WINDOWPATH: string;
		BUILD: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		build_alias: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		CFLAGS: string;
		GCC_AR: string;
		DISPLAY: string;
		LANG: string;
		DEBUG_CFLAGS: string;
		XDG_CURRENT_DESKTOP: string;
		_CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		GNOME_TERMINAL_SERVICE: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		CPPFLAGS: string;
		CONDA_PYTHON_EXE: string;
		SHELL: string;
		CMAKE_ARGS: string;
		HOST: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		CXX: string;
		DEBUG_CPPFLAGS: string;
		GDMSESSION: string;
		CONDA_DEFAULT_ENV: string;
		GPG_AGENT_INFO: string;
		ADDR2LINE: string;
		GCC_NM: string;
		CONDA_BUILD_SYSROOT: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		LD_GOLD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		CONDA_EXE: string;
		LD: string;
		ANDROID_HOME: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		CONDA_BACKUP_HOST: string;
		npm_command: string;
		GPROF: string;
		CONDA_PREFIX: string;
		host_alias: string;
		CC: string;
		RANLIB: string;
		MEMORY_PRESSURE_WRITE: string;
		VTE_VERSION: string;
		CXX_FOR_BUILD: string;
		CMAKE_PREFIX_PATH: string;
		NM: string;
		OBJDUMP: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
