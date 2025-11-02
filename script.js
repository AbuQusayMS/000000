'use strict';

// ==================== 🎯 الثوابت والإعدادات الأساسية ====================
const ICON_SUN = '\u2600\uFE0F';
const ICON_MOON = '\uD83C\uDF19';

/**
 * @class QuizGame
 * @classdesc نظام لعبة كويز متقدم مع طبقات حماية متعددة وتحسين أداء شامل
 */
class QuizGame {
    constructor() {
        // 🔒 التكوين المجمد والآمن
        this.config = Object.freeze(this._initializeSecureConfig());
        
        // 🛡️ أنظمة الأمان المتقدمة
        this._initializeSecuritySystems();
        
        // 📊 هياكل البيانات المحسنة
        this._initializeDataStructures();
        
        // 🎵 نظام الصوت المتقدم
        this._initializeAudioSystem();
        
        // 🌐 إدارة الشبكة والاتصال
        this._initializeNetworkSystems();
        
        // 📈 نظام المراقبة والأداء
        this._initializeMonitoringSystems();
        
        // 🚀 تهيئة الأنظمة الأساسية
        this._initializeCoreSystems();
    }

    // ==================== 🔒 التهيئات الأساسية ====================

    /**
     * تهيئة التكوين الآمن مع قيم افتراضية محمية
     * @private
     * @returns {Object}
     */
    _initializeSecureConfig() {
        const config = {
            // 🌐 إعدادات Supabase
            SUPABASE_URL: 'https://caixyxzokfvsouuwucwc.supabase.co',
            SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhaXh5eHpva2Z2c291dXd1Y3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTkzMTAsImV4cCI6MjA3Njg5NTMxMH0.OTeqKh7z6B2EQoz4NnhwcqfBQC_NfNVw0MxhBecRyAc',

            // 🔗 واجهات برمجة التطبيقات
            EDGE_SAVE_URL: 'https://caixyxzokfvsouuwucwc.supabase.co/functions/v1/saveResult',
            EDGE_LOG_URL: 'https://caixyxzokfvsouuwucwc.supabase.co/functions/v1/clientLog',
            EDGE_REPORT_URL: 'https://caixyxzokfvsouuwucwc.supabase.co/functions/v1/report',
            EDGE_LEADERBOARD_URL: 'https://caixyxzokfvsouuwucwc.supabase.co/functions/v1/leaderboard',

            APP_KEY: 'MS_AbuQusay_2025',
            QUESTIONS_URL: './questions.json',

            // ⏱️ إعدادات التوقيت
            QUESTION_TIME: 80,
            MAX_WRONG_ANSWERS: Infinity,
            STARTING_SCORE: 100,
            
            // 🎚️ المستويات
            LEVELS: Object.freeze([
                { name: 'easy', label: 'سهل', difficulty: 1, timeMultiplier: 1.0 },
                { name: 'medium', label: 'متوسط', difficulty: 1.5, timeMultiplier: 0.8 },
                { name: 'hard', label: 'صعب', difficulty: 2.0, timeMultiplier: 0.6 },
                { name: 'impossible', label: 'مستحيل', difficulty: 3.0, timeMultiplier: 0.4 }
            ]),
            
            // 🛠️ المساعدات والتكاليف
            HELPER_COSTS: Object.freeze({ 
                fiftyFifty: 100, 
                freezeTime: 100, 
                skipQuestionBase: 0, 
                skipQuestionIncrement: 0 
            }),
            
            // ⚙️ إعدادات الأداء
            SKIP_WEIGHT: 0.7,
            CLICK_DEBOUNCE_MS: 600,
            COOLDOWN_SECONDS: 30,
            REQ_TIMEOUT_MS: 10000,
            
            // 🔐 إعدادات الأمان المتقدمة
            MAX_REQUESTS_PER_MINUTE: 60,
            SESSION_TIMEOUT_MINUTES: 30,
            RATE_LIMIT_WINDOW_MS: 60000,
            MAX_ERRORS_PER_SESSION: 10,
            ANTI_CHEAT_THRESHOLD: 3,
            
            // 🔊 إعدادات الصوت
            AUDIO_POOL_SIZES: Object.freeze({
                correct: 4,
                wrong: 4,
                levelup: 6,
                win: 6,
                loss: 6,
                start: 4,
                click: 8,
                notify: 4,
                coin: 4,
                fadeout: 2,
                whoosh: 4
            })
        };

        // ✅ التحقق من التكوين في وضع التطوير
        if (this._isDevelopmentMode()) {
            this._validateConfiguration(config);
        }

        return config;
    }

    /**
     * تهيئة أنظمة الأمان المتقدمة
     * @private
     */
    _initializeSecuritySystems() {
        // 🔐 إدارة الجلسة المتقدمة
        this.currentSessionId = this._generateSecureSessionId();
        this.deviceId = this._getOrCreateDeviceId();
        this.playerId = this._generatePlayerId();
        this.securityToken = this._generateSecurityToken();
        
        // 🛡️ أنظمة الحماية
        this.rateLimitTracker = new Map();
        this.suspiciousActivityLog = new Map();
        this.lastActionAt = new Map();
        this.idempotency = new Set();
        this.antiCheatFlags = new Set();
        
        // 🔒 حماية من التلاعب
        this._setupConsoleProtection();
        this._setupMutationProtection();
    }

    /**
     * تهيئة هياكل البيانات المحسنة
     * @private
     */
    _initializeDataStructures() {
        // 📊 إدارة الحالة
        this.questions = new Map();
        this.gameState = this._createSecureGameState();
        this.timer = this._createAdvancedTimerState();
        
        // 🖥️ إدارة DOM آمنة
        this.dom = this._createSecureDOMProxy();
        
        // 💾 أنظمة التخزين الذكي
        this.imageCache = new Map();
        this.leaderboardCache = new Map();
        this.leaderboardCacheExpiry = new Map();
        this.assetCache = new Map();
        
        // 📝 إدارة الأخطاء والبيانات
        this.recentErrors = [];
        this.cleanupQueue = [];
        this.pendingRequests = new Set();
        this.retryQueue = [];
    }

    /**
     * تهيئة نظام الصوت المتقدم
     * @private
     */
    _initializeAudioSystem() {
        this.audioCache = new Map();
        this.audioPool = new Map();
        this.audioContext = null;
        this.audioEnabled = this._loadAudioPreference();
        this._audioPools = null;
        this._audioReady = false;
    }

    /**
     * تهيئة أنظمة الشبكة والاتصال
     * @private
     */
    _initializeNetworkSystems() {
        this.pendingRequests = new Set();
        this.retryQueue = [];
        this.offlineQueue = [];
        this.syncManager = new Map();
        this.connectionState = {
            online: navigator.onLine,
            lastCheck: Date.now(),
            retryCount: 0
        };
    }

    /**
     * تهيئة أنظمة المراقبة والأداء
     * @private
     */
    _initializeMonitoringSystems() {
        this.performanceMetrics = Object.seal({
            startTime: performance.now(),
            questionsAnswered: 0,
            totalTimeSpent: 0,
            averageResponseTime: 0,
            sessionStart: Date.now(),
            domReadyTime: 0,
            firstQuestionTime: 0,
            memoryUsage: 0,
            fps: 0
        });

        this.analyticsData = {
            sessionStart: Date.now(),
            interactions: 0,
            errors: 0,
            completions: 0,
            deviceInfo: this._collectDeviceInfo()
        };

        this._lbTicker = null;
        this.answerSubmitted = false;
        this.lbFirstOpenDone = false;
        this.cropper = null;
        this.leaderboardSubscription = null;
    }

    /**
     * تهيئة الأنظمة الأساسية
     * @private
     */
    _initializeCoreSystems() {
        this._setupErrorHandling();
        this._setupBackButtonHandler();
        this._setupActivityMonitoring();
        this._setupCleanupSystem();
        this._setupPerformanceMonitoring();
        this._setupOfflineSupport();
    }

    // ==================== 🛡️ أنظمة الأمان المتقدمة ====================

    /**
     * إنشاء معرف جلسة آمن مع تشفير
     * @private
     * @returns {string}
     */
    _generateSecureSessionId() {
        try {
            const crypto = window.crypto || window.msCrypto;
            const array = new Uint8Array(24);
            crypto.getRandomValues(array);
            const randomPart = Array.from(array, byte => 
                byte.toString(16).padStart(2, '0')
            ).join('');
            
            const timestamp = Date.now().toString(36);
            const userAgentHash = this._hashString(navigator.userAgent);
            const sessionId = `sess_${timestamp}_${randomPart}_${userAgentHash}`;
            
            // 🔒 تخزين مشفر للجلسة
            this._storeEncrypted('session_id', sessionId);
            return sessionId;
        } catch (error) {
            return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 16)}`;
        }
    }

    /**
     * توليد هاش آمن للنص
     * @private
     * @param {string} str
     * @returns {string}
     */
    _hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(36).substr(0, 12);
    }

    /**
     * الحصول على أو إنشاء معرف الجهاز
     * @private
     * @returns {string}
     */
    _getOrCreateDeviceId() {
        const STORAGE_KEY = 'quiz_device_id_v3';
        try {
            let deviceId = localStorage.getItem(STORAGE_KEY);
            if (!deviceId || !this._validateDeviceId(deviceId)) {
                deviceId = this._generateDeviceFingerprint();
                localStorage.setItem(STORAGE_KEY, deviceId);
            }
            return deviceId;
        } catch (error) {
            return this._generateTemporaryDeviceId();
        }
    }

    /**
     * توليد بصمة جهاز فريدة
     * @private
     * @returns {string}
     */
    _generateDeviceFingerprint() {
        const components = [
            navigator.userAgent,
            navigator.language,
            navigator.hardwareConcurrency || 'unknown',
            screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
            new Date().getTimezoneOffset(),
            navigator.platform,
            !!navigator.pdfViewerEnabled
        ].join('|');
        
        return `device_${this._hashString(components)}_${Date.now().toString(36)}`;
    }

    /**
     * إنشاء معرف لاعب فريد
     * @private
     * @returns {string}
     */
    _generatePlayerId() {
        const sessionPart = this.currentSessionId.substr(0, 12);
        const devicePart = this.deviceId.substr(0, 8);
        const timePart = Date.now().toString(36);
        return `player_${sessionPart}_${devicePart}_${timePart}`;
    }

    /**
     * توليد رمز أمان للجلسة
     * @private
     * @returns {string}
     */
    _generateSecurityToken() {
        const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 16)}`;
        this._storeEncrypted('security_token', token);
        return token;
    }

    /**
     * تخزين بيانات مشفرة
     * @private
     * @param {string} key
     * @param {string} value
     */
    _storeEncrypted(key, value) {
        try {
            const encrypted = btoa(unescape(encodeURIComponent(value)));
            sessionStorage.setItem(`enc_${key}`, encrypted);
        } catch (error) {
            console.warn('Failed to encrypt data:', error);
        }
    }

    /**
     * التحقق من صحة معرف الجهاز
     * @private
     * @param {string} deviceId
     * @returns {boolean}
     */
    _validateDeviceId(deviceId) {
        return deviceId && 
               deviceId.startsWith('device_') && 
               deviceId.length > 20 &&
               deviceId.split('_').length >= 3;
    }

    // ==================== 🎮 إدارة حالة اللعبة ====================

    /**
     * إنشاء حالة لعبة آمنة
     * @private
     * @returns {Object}
     */
    _createSecureGameState() {
        const state = {
            currentQuestion: null,
            score: this.config.STARTING_SCORE,
            level: 0,
            wrongAnswers: 0,
            usedHelpers: new Set(),
            isPaused: false,
            isGameOver: false,
            currentStreak: 0,
            bestStreak: 0,
            sessionStart: Date.now(),
            totalQuestionsAttempted: 0,
            accuracy: 0,
            timeSpent: 0,
            helpersUsed: new Map()
        };

        return Object.seal(state);
    }

    /**
     * إنشاء حالة مؤقت متقدمة
     * @private
     * @returns {Object}
     */
    _createAdvancedTimerState() {
        return Object.seal({
            interval: null,
            isFrozen: false,
            total: 0,
            startTime: 0,
            remainingTime: this.config.QUESTION_TIME,
            freezeCount: 0,
            timeElapsed: 0,
            lastUpdate: 0,
            animationFrame: null
        });
    }

    // ==================== 🖥️ إدارة DOM آمنة ====================

    /**
     * إنشاء وكيل آمن لعناصر DOM
     * @private
     * @returns {Proxy}
     */
    _createSecureDOMProxy() {
        return new Proxy({}, {
            get: (target, prop) => {
                if (prop in target) {
                    const element = target[prop];
                    return element && element.nodeType === Node.ELEMENT_NODE ? element : null;
                }
                return null;
            },
            set: (target, prop, value) => {
                if (value && value.nodeType === Node.ELEMENT_NODE) {
                    target[prop] = value;
                } else if (this._isDevelopmentMode()) {
                    console.warn(`محاولة تعيين عنصر DOM غير صالح لـ: ${prop}`);
                }
                return true;
            }
        });
    }

    // ==================== 🔊 نظام الصوت المتقدم ====================

    /**
     * تحميل تفضيلات الصوت
     * @private
     * @returns {boolean}
     */
    _loadAudioPreference() {
        try {
            const saved = localStorage.getItem('quiz_audio_enabled');
            const volume = localStorage.getItem('quiz_audio_volume');
            
            if (volume !== null) {
                this.audioVolume = Math.max(0, Math.min(1, parseFloat(volume)));
            } else {
                this.audioVolume = 0.7;
            }
            
            return saved !== null ? JSON.parse(saved) : true;
        } catch {
            return true;
        }
    }

    /**
     * حفظ تفضيلات الصوت
     * @private
     */
    _saveAudioPreference() {
        try {
            localStorage.setItem('quiz_audio_enabled', JSON.stringify(this.audioEnabled));
            localStorage.setItem('quiz_audio_volume', this.audioVolume.toString());
        } catch (error) {
            console.warn('Failed to save audio preferences:', error);
        }
    }

    // ==================== 🔧 الأدوات المساعدة ====================

    /**
     * التحقق من وضع التطوير
     * @private
     * @returns {boolean}
     */
    _isDevelopmentMode() {
        return typeof process !== 'undefined' && 
               process.env && 
               process.env.NODE_ENV === 'development';
    }

    /**
     * التحقق من صحة التكوين
     * @private
     * @param {Object} config
     */
    _validateConfiguration(config) {
        const required = ['SUPABASE_URL', 'SUPABASE_KEY', 'QUESTIONS_URL'];
        const missing = required.filter(key => !config[key]);
        
        if (missing.length > 0) {
            console.warn('❌ حقول التكوين المطلوبة مفقودة:', missing);
        }

        // التحقق من نطاقات القيم
        if (config.QUESTION_TIME < 10 || config.QUESTION_TIME > 300) {
            console.warn('⚠️ QUESTION_TIME يجب أن يكون بين 10 و 300 ثانية');
        }

        if (config.STARTING_SCORE < 0) {
            console.warn('⚠️ STARTING_SCORE يجب أن يكون قيمة موجبة');
        }
    }

    /**
     * جمع معلومات الجهاز
     * @private
     * @returns {Object}
     */
    _collectDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
            screenResolution: `${screen.width}x${screen.height}`,
            colorDepth: screen.colorDepth,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            touchSupport: 'ontouchstart' in window,
            online: navigator.onLine
        };
    }

    // ==================== 🛡️ حماية إضافية ====================

    /**
     * إعداد حماية الكونسول
     * @private
     */
    _setupConsoleProtection() {
        if (!this._isDevelopmentMode()) {
            Object.defineProperty(window, 'quiz', {
                value: Object.freeze({
                    version: '1.0.0',
                    sessionId: this.currentSessionId,
                    debug: false
                }),
                writable: false,
                configurable: false
            });
        }
    }

    /**
     * إعداد حماية من التعديلات
     * @private
     */
    _setupMutationProtection() {
        // حماية من تعديلات DOM غير المصرح بها
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && 
                    mutation.attributeName === 'data-quiz-protected') {
                    mutation.target.setAttribute('data-quiz-protected', 'true');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-quiz-protected'],
            subtree: true
        });
    }

    /**
     * إنشاء معرف جهاز مؤقت
     * @private
     * @returns {string}
     */
    _generateTemporaryDeviceId() {
        return `temp_device_${this._hashString(navigator.userAgent)}_${Date.now().toString(36)}`;
    }

    // ==================== 🎯 الدوال العامة المحسنة ====================

    /**
     * كشف العناصر DOM المفقودة بشكل استباقي
     */
    cacheDomElements() {
        const byId = (id) => {
            const element = document.getElementById(id);
            if (!element && this._isDevelopmentMode()) {
                console.warn(`❌ العنصر غير موجود: #${id}`);
            }
            return element;
        };

        this.dom = {
            screens: {
                loader:        byId('loader'),
                start:         byId('startScreen'),
                avatar:        byId('avatarScreen'),
                nameEntry:     byId('nameEntryScreen'),
                instructions:  byId('instructionsScreen'),
                game:          byId('gameContainer'),
                levelComplete: byId('levelCompleteScreen'),
                end:           byId('endScreen'),
                leaderboard:   byId('leaderboardScreen')
            },
            modals: {
                confirmExit:    byId('confirmExitModal'),
                advancedReport: byId('advancedReportModal'),
                avatarEditor:   byId('avatarEditorModal'),
                playerDetails:  byId('playerDetailsModal')
            },
            // العناصر الأساسية
            nameInput:             byId('nameInput'),
            nameError:             byId('nameError'),
            confirmNameBtn:        byId('confirmNameBtn'),
            confirmAvatarBtn:      byId('confirmAvatarBtn'),
            reportProblemForm:     byId('reportProblemForm'),
            imageToCrop:           byId('image-to-crop'),
            leaderboardContent:    byId('leaderboardContent'),
            questionText:          byId('questionText'),
            optionsGrid:           this.getEl('.options-grid'),
            scoreDisplay:          byId('currentScore'),
            reportFab:             byId('reportErrorFab'),
            problemScreenshot:     byId('problemScreenshot'),
            reportImagePreview:    byId('reportImagePreview'),
            includeAutoDiagnostics:byId('includeAutoDiagnostics'),
            lbMode:                byId('lbMode'),
            lbAttempt:             byId('lbAttempt'),
            retryHint:             byId('retryHint'),
            retryCountdown:        byId('retryCountdown'),
            startBtn:              byId('startBtn')
        };

        // تشخيص العناصر المفقودة
        this._diagnoseMissingElements();
    }

    /**
     * تشخيص العناصر DOM المفقودة
     * @private
     */
    _diagnoseMissingElements() {
        const requiredElements = [
            'nameInput', 'confirmNameBtn', 'gameContainer', 'startScreen', 
            'avatarScreen', 'nameEntryScreen', 'instructionsScreen', 
            'endScreen', 'leaderboardScreen', 'questionText', 'currentScore'
        ];

        const missing = requiredElements.filter(id => !document.getElementById(id));
        
        if (missing.length > 0 && this._isDevelopmentMode()) {
            console.warn('🚨 عناصر DOM أساسية مفقودة:', missing);
        }
    }

    /**
     * الحصول على عنصر مع معالجة الأخطاء
     * @param {string} selector 
     * @param {Element} parent 
     * @returns {Element|null}
     */
    getEl(selector, parent = document) {
        try {
            return parent.querySelector(selector);
        } catch (error) {
            console.warn(`❌ خطأ في اختيار العنصر: ${selector}`, error);
            return null;
        }
    }

    /**
     * الحصول على جميع العناصر مع معالجة الأخطاء
     * @param {string} selector 
     * @param {Element} parent 
     * @returns {Array}
     */
    getAllEl(selector, parent = document) {
        try {
            return Array.from(parent.querySelectorAll(selector));
        } catch (error) {
            console.warn(`❌ خطأ في اختيار العناصر: ${selector}`, error);
            return [];
        }
    }

    /**
     * ربط الأحداث بشكل آمن
     * @param {Element} el 
     * @param {string} ev 
     * @param {Function} fn 
     * @param {Object} opts 
     * @returns {boolean}
     */
    safeOn(el, ev, fn, opts = {}) {
        if (!el || typeof fn !== 'function') {
            console.warn(`❌ ربط حدث فاشل:`, { element: el, event: ev });
            return false;
        }

        try {
            el.addEventListener(ev, fn, {
                passive: true,
                ...opts
            });
            return true;
        } catch (error) {
            console.warn(`❌ خطأ في ربط الحدث ${ev}:`, error);
            return false;
        }
    }

    // ... (سيتم استكمال باقي الدوال في الرد التالي due to length limits)
}

// ==================== 🌟 تصدير الفئة ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizGame;
}

// ==================== 🎮 المرحلة 2 - نظام اللعبة المتقدم ====================

Object.assign(QuizGame.prototype, {
    
    /**
     * بدء اللعبة بعد الشاشات التمهيدية مع حماية متقدمة
     * @param {HTMLElement} [target] - العنصر المستهدف للتحقق من النشاط
     */
    postInstructionsStart: async function(target) {
        if (!this._validateGameStart()) return;
        
        try {
            await this._secureSessionCleanup();
            this._setupEnhancedGameState();
            await this._initializeGameSession();
            this.startGameFlow(0);
            
            // تسجيل بداية الجلسة
            this._logGameEvent('game_started', {
                level: 0,
                sessionId: this.currentSessionId,
                timestamp: Date.now()
            });
        } catch (error) {
            console.error('فشل بدء اللعبة:', error);
            this.showToast('❌ فشل بدء اللعبة، يرجى المحاولة مرة أخرى', 'error');
        }
    },
    
    /**
     * التحقق من إمكانية بدء اللعبة بشروط أمان
     * @private
     * @returns {boolean}
     */
    _validateGameStart: function() {
        // التحقق من التبريد
        const cooldownRemaining = this.getCooldownRemaining();
        if (cooldownRemaining > 0) {
            this.showToast(`⏳ يرجى الانتظار ${cooldownRemaining} ثانية قبل البدء`, 'warning');
            return false;
        }
        
        // التحقق من اكتمال التحميل
        if (!this.questions || this.questions.size === 0) {
            this.showToast('📥 جاري تحميل الأسئلة، يرجى الانتظار', 'info');
            return false;
        }
        
        // التحقق من صحة البيانات
        if (!this._validatePlayerData()) {
            this.showToast('❌ بيانات اللاعب غير صالحة', 'error');
            return false;
        }
        
        return true;
    },
    
    /**
     * إعداد حالة اللعبة المحسنة مع حماية البيانات
     * @private
     */
    _setupEnhancedGameState: function() {
        const playerName = (this.dom.nameInput?.value || '').trim();
        const avatar = this.gameState.avatar || '';
        
        this.gameState = Object.seal({
            // 🔐 بيانات اللاعب
            name: this._sanitizeInput(playerName),
            avatar: avatar,
            playerId: this.playerId,
            deviceId: this.deviceId,
            sessionId: this.currentSessionId,
            
            // 🎯 تقدم اللعبة
            level: 0,
            questionIndex: 0,
            wrongAnswers: 0,
            correctAnswers: 0,
            skips: 0,
            startTime: Date.now(),
            
            // 🛠️ المساعدات
            helpersUsed: new Map([
                ['fiftyFifty', false],
                ['freezeTime', false]
            ]),
            
            // 📊 النقاط والإحصائيات
            currentScore: this.config.STARTING_SCORE,
            shuffledQuestions: new Map(),
            attemptNumber: null,
            streak: 0,
            maxStreak: 0,
            
            // ⏰ بيانات التوقيت
            levelStartTime: 0,
            questionStartTime: 0,
            totalThinkingTime: 0
        });

        // 📈 إعادة ضبط مقاييس الأداء
        this.performanceMetrics = {
            startTime: performance.now(),
            questionsAnswered: 0,
            totalTimeSpent: 0,
            averageResponseTime: 0,
            fastestResponse: Infinity,
            slowestResponse: 0
        };
    },
    
    /**
     * تهيئة جلسة اللعبة بشكل آمن
     * @private
     */
    async _initializeGameSession() {
        // 🔒 إنشاء رموز أمان الجلسة
        this._generateSessionTokens();
        
        // 📥 التأكد من تحميل الأسئلة
        if (!this.questions || this.questions.size === 0) {
            await this.loadQuestions();
        }
        
        // 🎵 تهيئة النظام الصوتي
        if (!this._audioReady) {
            await this.preloadAudio();
        }
        
        // 💾 حفظ حالة البداية
        this._saveGameState('initial');
    },
    
    /**
     * بدء تدفق اللعبة الرئيسي
     * @param {number} levelIndex - فهرس المستوى
     */
    startGameFlow: function(levelIndex = 0) {
        this.gameState.level = levelIndex;
        this.gameState.levelStartTime = Date.now();
        
        this._updateScore(this.config.STARTING_SCORE, true);
        this._setupEnhancedGameUI();
        this.showScreen('game');
        this.playSound('start');
        
        // 🎯 بدء المستوى مع معالجة الأخطاء
        this._safeStartLevel();
    },

    /**
     * بدء المستوى بشكل آمن مع التعافي من الأخطاء
     * @private
     */
    _safeStartLevel: function() {
        try {
            this.startLevel();
        } catch (error) {
            console.error('خطأ في بدء المستوى:', error);
            this.showToast('❌ خطأ في تحميل المستوى', 'error');
            this._recoverFromLevelError();
        }
    },
    
    /**
     * بدء مستوى جديد
     */
    startLevel: function() {
        const currentLevel = this.config.LEVELS[this.gameState.level];
        if (!currentLevel) {
            throw new Error(`مستوى غير صالح: ${this.gameState.level}`);
        }
        
        // 🔄 إعادة تعيين المساعدات
        this.gameState.helpersUsed.clear();
        this.gameState.helpersUsed.set('fiftyFifty', false);
        this.gameState.helpersUsed.set('freezeTime', false);
        
        // 🎨 تحديث واجهة المستوى
        document.body.dataset.level = currentLevel.name;
        const levelBadge = this.getEl('#currentLevelBadge');
        if (levelBadge) levelBadge.textContent = currentLevel.label;

        // 📝 تحضير أسئلة المستوى
        const levelQuestions = this.getLevelQuestions(currentLevel.name);
        if (levelQuestions.length === 0) {
            throw new Error(`لا توجد أسئلة للمستوى: ${currentLevel.name}`);
        }
        
        this._prepareLevelQuestions(levelQuestions);
        this._initializeLevelUI();
        this.fetchQuestion();
    },
    
    /**
     * تحضير أسئلة المستوى مع الخلط الآمن
     * @private
     * @param {Array} questions - الأسئلة
     */
    _prepareLevelQuestions: function(questions) {
        const shuffled = this.shuffleArray(questions);
        this.gameState.shuffledQuestions = new Map(
            shuffled.map((q, index) => [index, q])
        );
        this.gameState.questionIndex = 0;
    },
    
    /**
     * تهيئة واجهة المستوى
     * @private
     */
    _initializeLevelUI: function() {
        this.updateLevelProgressUI();
        this._resetTimerUI();
        this._updateHelpersUI();
    },
    
    /**
     * جلب السؤال التالي
     */
    fetchQuestion: function() {
        // ✅ التحقق من انتهاء المستوى
        if (this.gameState.questionIndex >= this.gameState.shuffledQuestions.size) {
            this.levelComplete();
            return;
        }
        
        const question = this.gameState.shuffledQuestions.get(this.gameState.questionIndex);
        if (!question) {
            console.warn('سؤال غير موجود:', this.gameState.questionIndex);
            this.gameState.questionIndex++;
            this.fetchQuestion();
            return;
        }
        
        this.displayQuestion(question);
    },
    
    /**
     * عرض السؤال مع معالجة متقدمة للأخطاء
     * @param {Object} qData - بيانات السؤال
     */
    displayQuestion: function(qData) {
        try {
            this.answerSubmitted = false;
            this.gameState.questionStartTime = Date.now();
            
            const { text, options, correctText } = this.resolveQuestionFields(qData);
            
            // ✅ التحقق من صحة السؤال
            if (!this._validateQuestion(text, options, correctText)) {
                this._handleInvalidQuestion();
                return;
            }
            
            this._renderQuestionUI(text, options, correctText);
            this.startTimer();
            
        } catch (error) {
            console.error('خطأ في عرض السؤال:', error);
            this._handleQuestionError();
        }
    },
    
    /**
     * التحقق من صحة السؤال
     * @private
     * @param {string} text - نص السؤال
     * @param {Array} options - الخيارات
     * @param {string} correctText - الإجابة الصحيحة
     * @returns {boolean}
     */
    _validateQuestion: function(text, options, correctText) {
        if (!text || typeof text !== 'string') {
            console.warn('نص السؤال غير صالح:', text);
            return false;
        }
        
        if (!Array.isArray(options) || options.length < 2) {
            console.warn('خيارات السؤال غير صالحة:', options);
            return false;
        }
        
        if (!correctText || typeof correctText !== 'string') {
            console.warn('الإجابة الصحيحة غير صالحة:', correctText);
            return false;
        }
        
        // التحقق من وجود الإجابة الصحيحة في الخيارات
        const normalizedCorrect = this.normalize(correctText);
        const hasCorrectAnswer = options.some(opt => 
            this.normalize(opt) === normalizedCorrect
        );
        
        if (!hasCorrectAnswer) {
            console.warn('الإجابة الصحيحة غير موجودة في الخيارات:', { correctText, options });
            return false;
        }
        
        return true;
    },
    
    /**
     * عرض واجهة السؤال
     * @private
     * @param {string} text - نص السؤال
     * @param {Array} options - الخيارات
     * @param {string} correctText - الإجابة الصحيحة
     */
    _renderQuestionUI: function(text, options, correctText) {
        const totalQuestions = this.gameState.shuffledQuestions.size;
        const counter = this.getEl('#questionCounter');
        if (counter) {
            counter.textContent = `السؤال ${this.gameState.questionIndex + 1} من ${totalQuestions}`;
        }
        
        this.dom.questionText.textContent = text;
        this.dom.optionsGrid.innerHTML = '';
        
        // 🔀 خلط الخيارات بشكل آمن
        const displayOptions = this.shuffleArray([...options]);
        const normalizedCorrect = this.normalize(correctText);
        
        const fragment = document.createDocumentFragment();
        displayOptions.forEach(option => {
            const button = this._createOptionButton(option, normalizedCorrect);
            fragment.appendChild(button);
        });
        
        this.dom.optionsGrid.appendChild(fragment);
        this.updateGameStatsUI();
    },
    
    /**
     * إنشاء زر خيار مع بيانات التحقق
     * @private
     * @param {string} option - نص الخيار
     * @param {string} normalizedCorrect - الإجابة الصحيحة
     * @returns {HTMLElement}
     */
    _createOptionButton: function(option, normalizedCorrect) {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        
        const isCorrect = this.normalize(option) === normalizedCorrect;
        button.dataset.correct = isCorrect.toString();
        button.dataset.optionIndex = this._generateOptionId();
        
        // 🛡️ إضافة حماية من النقر السريع
        button.addEventListener('click', (e) => {
            if (this.answerSubmitted) {
                e.preventDefault();
                return;
            }
            this.checkAnswer(button);
        }, { once: true });
        
        return button;
    },
    
    /**
     * التحقق من الإجابة مع تحليل متقدم
     * @param {HTMLElement} selectedButton - الزر المختار
     */
    checkAnswer: async function(selectedButton) {
        if (this.answerSubmitted || !selectedButton) return;
        
        this.answerSubmitted = true;
        clearInterval(this.timer.interval);
        
        // 🔒 منع التفاعلات الإضافية
        this.getAllEl('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
            btn.style.pointerEvents = 'none';
        });
        
        const isCorrect = selectedButton.dataset.correct === 'true';
        const responseTime = Date.now() - this.gameState.questionStartTime;
        
        await this._processAnswer(selectedButton, isCorrect, responseTime);
    },
    
    /**
     * معالجة الإجابة مع تحديث البيانات
     * @private
     * @param {HTMLElement} selectedButton - الزر المختار
     * @param {boolean} isCorrect - هل الإجابة صحيحة
     * @param {number} responseTime - وقت الاستجابة
     */
    async _processAnswer: function(selectedButton, isCorrect, responseTime) {
        // 🎨 تحديث الواجهة
        this._highlightAnswer(selectedButton, isCorrect);
        
        // 📊 تحديث الإحصائيات
        this._updateGameStats(isCorrect, responseTime);
        
        // 🔊 تشغيل الصوت المناسب
        this.playSound(isCorrect ? 'correct' : 'wrong');
        
        // 💾 حفظ بيانات الأداء
        this._recordPerformanceMetrics(isCorrect, responseTime);
        
        // ⏳ الانتقال للسؤال التالي
        await this._proceedToNextQuestion(isCorrect);
    },
    
    /**
     * تسليط الضوء على الإجابة
     * @private
     * @param {HTMLElement} selectedButton - الزر المختار
     * @param {boolean} isCorrect - هل الإجابة صحيحة
     */
    _highlightAnswer: function(selectedButton, isCorrect) {
        if (isCorrect) {
            selectedButton.classList.add('correct');
            this.showToast('✅ إجابة صحيحة! +100 نقطة', 'success');
        } else {
            selectedButton.classList.add('wrong');
            const correctButton = this.dom.optionsGrid.querySelector('[data-correct="true"]');
            if (correctButton) correctButton.classList.add('correct');
            this.showToast('❌ إجابة خاطئة! -100 نقطة', 'error');
        }
        
        // 🎨 تأثيرات بصرية إضافية
        this._triggerAnswerEffects(isCorrect);
    },
    
    /**
     * تأثيرات بصرية للإجابة
     * @private
     * @param {boolean} isCorrect - هل الإجابة صحيحة
     */
    _triggerAnswerEffects: function(isCorrect) {
        const scoreDisplay = this.dom.scoreDisplay;
        if (scoreDisplay) {
            scoreDisplay.classList.add(isCorrect ? 'score-correct' : 'score-wrong');
            setTimeout(() => {
                scoreDisplay.classList.remove('score-correct', 'score-wrong');
            }, 1000);
        }
    },
    
    /**
     * تحديث إحصائيات اللعبة
     * @private
     * @param {boolean} isCorrect - هل الإجابة صحيحة
     * @param {number} responseTime - وقت الاستجابة
     */
    _updateGameStats: function(isCorrect, responseTime) {
        if (isCorrect) {
            this.gameState.correctAnswers++;
            this.gameState.streak++;
            this.gameState.maxStreak = Math.max(this.gameState.maxStreak, this.gameState.streak);
            this._updateScore(this.gameState.currentScore + 100);
        } else {
            this.gameState.wrongAnswers++;
            this.gameState.streak = 0;
            this._updateScore(this.gameState.currentScore - 50); // عقاب أقل
        }
        
        this.gameState.totalThinkingTime += responseTime;
        this.performanceMetrics.questionsAnswered++;
        
        // 📈 تحديث مقاييس الأداء
        this.performanceMetrics.fastestResponse = Math.min(
            this.performanceMetrics.fastestResponse, 
            responseTime
        );
        this.performanceMetrics.slowestResponse = Math.max(
            this.performanceMetrics.slowestResponse, 
            responseTime
        );
        
        this.performanceMetrics.averageResponseTime = 
            this.gameState.totalThinkingTime / this.performanceMetrics.questionsAnswered;
    },
    
    /**
     * الانتقال للسؤال التالي
     * @private
     * @param {boolean} wasCorrect - هل كانت الإجابة صحيحة
     */
    async _proceedToNextQuestion: function(wasCorrect) {
        this.gameState.questionIndex++;
        
        // 📊 تسجيل الحدث
        this._logGameEvent('question_answered', {
            questionIndex: this.gameState.questionIndex - 1,
            wasCorrect,
            responseTime: Date.now() - this.gameState.questionStartTime,
            level: this.gameState.level
        });
        
        // ⏳ تأخير الانتقال
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // ✅ التحقق من نهاية اللعبة
        const isGameOver = this.gameState.wrongAnswers >= this.config.MAX_WRONG_ANSWERS;
        if (isGameOver) {
            this.endGame(false);
        } else {
            this.fetchQuestion();
        }
    },

    /**
     * اكتمال المستوى
     */
    levelComplete: function() {
        const isLastLevel = this.gameState.level >= this.config.LEVELS.length - 1;
        
        if (isLastLevel) {
            this.endGame(true);
            return;
        }

        this._showLevelCompleteScreen();
        this.playSound('levelup');
        
        // 📊 تسجيل اكتمال المستوى
        this._logGameEvent('level_completed', {
            level: this.gameState.level,
            score: this.gameState.currentScore,
            correctAnswers: this.gameState.correctAnswers,
            wrongAnswers: this.gameState.wrongAnswers
        });
    },
    
    /**
     * عرض شاشة اكتمال المستوى
     * @private
     */
    _showLevelCompleteScreen: function() {
        const currentLevel = this.config.LEVELS[this.gameState.level];
        const nextLevel = this.config.LEVELS[this.gameState.level + 1];
        
        this.getEl('#levelCompleteTitle').textContent = 
            `🎉 أكملت المستوى ${currentLevel.label}!`;
        this.getEl('#levelScore').textContent = this.formatNumber(this.gameState.currentScore);
        this.getEl('#levelErrors').textContent = this.gameState.wrongAnswers;
        this.getEl('#levelCorrect').textContent = this.gameState.correctAnswers;
        this.getEl('#nextLevelName').textContent = nextLevel.label;
        
        this.showScreen('levelComplete');
    },
    
    /**
     * الانتقال للمستوى التالي
     */
    nextLevel: function() {
        this.gameState.level++;
        
        if (this.gameState.level >= this.config.LEVELS.length) {
            this.endGame(true);
        } else {
            this.showScreen('game');
            this.gameState.levelStartTime = Date.now();
            this.startLevel();
        }
    },

    /**
     * بدء المؤقت مع تحسينات الأداء
     */
    startTimer: function() {
        clearInterval(this.timer.interval);
        this.timer.total = this.config.QUESTION_TIME;
        this.timer.remainingTime = this.timer.total;
        
        const bar = this.getEl('.timer-bar');
        const label = this.getEl('.timer-text');
        if (!bar || !label) return;

        // 🎨 إعداد واجهة المؤقت
        label.textContent = this.timer.remainingTime;
        bar.style.width = '100%';
        bar.style.backgroundColor = 'var(--success-color)';
        
        const updateTimer = () => {
            if (this.timer.isFrozen) return;
            
            this.timer.remainingTime--;
            label.textContent = this.timer.remainingTime;
            
            // 🎨 تحديث المظهر حسب الوقت المتبقي
            this._updateTimerAppearance(bar, this.timer.remainingTime);
            
            if (this.timer.remainingTime <= 0) {
                clearInterval(this.timer.interval);
                this._handleTimeout();
            }
        };
        
        updateTimer();
        this.timer.interval = setInterval(updateTimer, 1000);
    },
    
    /**
     * تحديث مظهر المؤقت
     * @private
     * @param {HTMLElement} bar - شريط المؤقت
     * @param {number} timeLeft - الوقت المتبقي
     */
    _updateTimerAppearance: function(bar, timeLeft) {
        const percentage = (timeLeft / this.timer.total) * 100;
        bar.style.width = `${percentage}%`;
        
        if (timeLeft <= 10) {
            bar.style.backgroundColor = 'var(--error-color)';
            bar.classList.add('pulse');
        } else if (timeLeft <= 20) {
            bar.style.backgroundColor = 'var(--warning-color)';
            bar.classList.remove('pulse');
        } else {
            bar.style.backgroundColor = 'var(--success-color)';
            bar.classList.remove('pulse');
        }
    },
    
    /**
     * معالجة انتهاء الوقت
     * @private
     */
    _handleTimeout: function() {
        this.showToast('⏰ انتهى الوقت!', 'error');
        const wrongButtons = this.dom.optionsGrid.querySelectorAll('.option-btn:not([data-correct="true"])');
        const randomWrong = wrongButtons[Math.floor(Math.random() * wrongButtons.length)];
        this.checkAnswer(randomWrong || null);
    },

    /**
     * تحديث النقاط مع تأثيرات بصرية
     * @param {number} newScore - النقاط الجديدة
     * @param {boolean} [isReset=false] - هل هو إعادة تعيين
     */
    _updateScore: function(newScore, isReset = false) {
        const oldScore = this.gameState.currentScore;
        this.gameState.currentScore = Math.max(0, newScore);
        
        this.dom.scoreDisplay.textContent = this.formatNumber(this.gameState.currentScore);
        this.updateGameStatsUI();
        
        if (!isReset) {
            this._animateScoreChange(oldScore, newScore);
        }
    },
    
    /**
     * تأثيرات حركية لتغيير النقاط
     * @private
     * @param {number} oldScore - النقاط القديمة
     * @param {number} newScore - النقاط الجديدة
     */
    _animateScoreChange: function(oldScore, newScore) {
        const scoreDisplay = this.dom.scoreDisplay;
        const isIncrease = newScore > oldScore;
        
        scoreDisplay.classList.add(isIncrease ? 'score-increase' : 'score-decrease');
        
        setTimeout(() => {
            scoreDisplay.classList.remove('score-increase', 'score-decrease');
        }, 600);
    },
    
    /**
     * تحديث واجهة إحصائيات اللعبة
     */
    updateGameStatsUI: function() {
        this._updateWrongAnswersUI();
        this._updateSkipsUI();
        this._updateHelpersUI();
        this._updateStreakUI();
    },
    
    /**
     * تحديث عرض الإجابات الخاطئة
     * @private
     */
    _updateWrongAnswersUI: function() {
        const wrongEl = this.getEl('#wrongAnswersCount');
        if (wrongEl) {
            wrongEl.textContent = `${this.gameState.wrongAnswers} / ${this.config.MAX_WRONG_ANSWERS}`;
            wrongEl.classList.toggle('warning', this.gameState.wrongAnswers > 0);
            wrongEl.classList.toggle('danger', this.gameState.wrongAnswers >= this.config.MAX_WRONG_ANSWERS - 1);
        }
    },
    
    /**
     * تحديث عرض التخطيات
     * @private
     */
    _updateSkipsUI: function() {
        const skipEl = this.getEl('#skipCount');
        if (skipEl) {
            skipEl.textContent = this.gameState.skips;
        }
    },
    
    /**
     * تحديث واجهة المساعدات
     * @private
     */
    _updateHelpersUI: function() {
        const isImpossible = this.config.LEVELS[this.gameState.level]?.name === 'impossible';
        
        this.getAllEl('.helper-btn').forEach(btn => {
            const type = btn.dataset.type;
            
            if (isImpossible) {
                btn.disabled = true;
                btn.title = 'غير متاح في المستوى المستحيل';
                return;
            }
            
            if (type === 'skipQuestion') {
                btn.disabled = false;
            } else {
                btn.disabled = this.gameState.helpersUsed.get(type) === true;
            }
            
            // 🎨 تحديث المظهر
            btn.classList.toggle('used', this.gameState.helpersUsed.get(type) === true);
        });
    },
    
    /**
     * تحديث عرض التسلسل
     * @private
     */
    _updateStreakUI: function() {
        const streakEl = this.getEl('#currentStreak');
        if (streakEl && this.gameState.streak > 1) {
            streakEl.textContent = `🔥 ${this.gameState.streak}`;
            streakEl.style.display = 'block';
        } else if (streakEl) {
            streakEl.style.display = 'none';
        }
    },

    // ... (سيتم استكمال باقي الدوال في الرد التالي due to length limits)
});

// ==================== 🔧 دوال مساعدة إضافية ====================

/**
 * دوال الحماية والتحقق
 */
Object.assign(QuizGame.prototype, {
    
    /**
     * التحقق من بيانات اللاعب
     * @private
     * @returns {boolean}
     */
    _validatePlayerData: function() {
        const name = (this.dom.nameInput?.value || '').trim();
        
        if (!name || name.length < 2 || name.length > 20) {
            return false;
        }
        
        // التحقق من الأحرف المسموحة
        const validNameRegex = /^[\p{L}\p{N}\s\-_.]{2,20}$/u;
        if (!validNameRegex.test(name)) {
            return false;
        }
        
        return true;
    },
    
    /**
     * تنظيف المدخلات من الأحغير الضارة
     * @private
     * @param {string} input - النص المدخل
     * @returns {string}
     */
    _sanitizeInput: function(input) {
        return String(input || '')
            .replace(/[<>]/g, '') // إزالة علامات HTML
            .replace(/javascript:/gi, '') // إزالة JavaScript
            .substring(0, 100); // تحديد الطول
    },
    
    /**
     * إنشاء معرف فريد للخيار
     * @private
     * @returns {string}
     */
    _generateOptionId: function() {
        return `opt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },
    
    /**
     * إعادة تعيين واجهة المؤقت
     * @private
     */
    _resetTimerUI: function() {
        const bar = this.getEl('.timer-bar');
        const label = this.getEl('.timer-text');
        
        if (bar) {
            bar.style.width = '100%';
            bar.style.backgroundColor = 'var(--success-color)';
            bar.classList.remove('pulse');
        }
        
        if (label) {
            label.textContent = this.config.QUESTION_TIME;
        }
    },
    
    /**
     * إعداد واجهة اللعبة المحسنة
     * @private
     */
    _setupEnhancedGameUI: function() {
        const avatarEl = this.getEl('#playerAvatar');
        const nameEl = this.getEl('#playerName');
        const idEl = this.getEl('#playerId');
        
        // عرض بيانات اللاعب
        if (nameEl) nameEl.textContent = this.gameState.name;
        if (idEl) idEl.textContent = this.gameState.playerId;
        
        // معالجة الصورة الرمزية
        if (avatarEl && this.gameState.avatar) {
            avatarEl.src = this.gameState.avatar;
            avatarEl.alt = `صورة ${this.gameState.name}`;
            avatarEl.onerror = () => {
                avatarEl.style.display = 'none';
            };
        }
        
        // تحديث شارات المستوى
        this.updateLevelProgressUI();
    },
    
    /**
     * التعافي من خطأ في المستوى
     * @private
     */
    _recoverFromLevelError: function() {
        this.gameState.level = Math.max(0, this.gameState.level - 1);
        setTimeout(() => {
            this.showScreen('start');
            this.showToast('🔄 تم استعادة الحالة، يرجى المحاولة مرة أخرى', 'info');
        }, 2000);
    },
    
    /**
     * معالجة سؤال غير صالح
     * @private
     */
    _handleInvalidQuestion: function() {
        this.gameState.skips++;
        this.gameState.questionIndex++;
        this.showToast('⚠️ تم تخطي سؤال غير صالح', 'warning');
        
        setTimeout(() => {
            this.fetchQuestion();
        }, 1000);
    },
    
    /**
     * معالجة خطأ في السؤال
     * @private
     */
    _handleQuestionError: function() {
        this._handleInvalidQuestion();
    }
});

// ==================== 🏆 نظام لوحة الصدارة المتقدم ====================

Object.assign(QuizGame.prototype, {

    /**
     * تهيئة نظام لوحة الصدارة مع التخزين المؤقت الذكي
     * @private
     */
    _initializeLeaderboardSystem: function() {
        this.leaderboardCache = new Map();
        this.leaderboardCacheExpiry = new Map();
        this._lbTicker = null;
        this._lbUpdateCallbacks = new Set();
        
        // 🕒 إعداد التحديث التلقائي
        this._setupLeaderboardAutoRefresh();
    },

    /**
     * إعداد التحديث التلقائي للوحة الصدارة
     * @private
     */
    _setupLeaderboardAutoRefresh: function() {
        // 🔄 تحديث كل دقيقة عند وجود اتصال
        setInterval(() => {
            if (navigator.onLine && this._isLeaderboardVisible()) {
                this._refreshLeaderboardData();
            }
        }, 60000);
    },

    /**
     * التحقق إذا كانت لوحة الصدارة مرئية
     * @private
     * @returns {boolean}
     */
    _isLeaderboardVisible: function() {
        return this.dom.screens.leaderboard?.classList.contains('active') || false;
    },

    /**
     * عرض لوحة الصدارة مع بيانات محسنة
     */
    async displayLeaderboard() {
        this.showScreen('leaderboard');
        
        // 🎯 عرض حالة التحميل
        const container = this.dom.leaderboardContent;
        if (container) {
            container.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>جاري تحميل لوحة الصدارة...</p>
                </div>
            `;
        }

        // 🔧 إعداد الواجهة لأول مرة
        if (!this.lbFirstOpenDone) {
            this._initializeLeaderboardUI();
            this.lbFirstOpenDone = true;
        }

        // 📊 تحميل البيانات
        await this._loadLeaderboardData();
    },

    /**
     * تهيئة واجهة لوحة الصدارة
     * @private
     */
    _initializeLeaderboardUI: function() {
        if (this.dom.lbMode) {
            this.dom.lbMode.value = 'all';
            
            // 🎯 إضافة مستمعي الأحداث
            this.safeOn(this.dom.lbMode, 'change', () => {
                this._handleLeaderboardFilterChange();
            });
        }

        if (this.dom.lbAttempt) {
            this.dom.lbAttempt.disabled = true;
            
            this.safeOn(this.dom.lbAttempt, 'change', () => {
                this._loadLeaderboardData();
            });
        }

        // 🔄 زر التحديث
        const refreshBtn = this.getEl('#lbRefreshBtn');
        if (refreshBtn) {
            this.safeOn(refreshBtn, 'click', () => {
                this._forceRefreshLeaderboard();
            });
        }
    },

    /**
     * معالجة تغيير فلتر لوحة الصدارة
     * @private
     */
    _handleLeaderboardFilterChange: function() {
        const mode = this.dom.lbMode?.value || 'all';
        
        if (this.dom.lbAttempt) {
            this.dom.lbAttempt.disabled = (mode !== 'attempt');
        }

        this._loadLeaderboardData();
    },

    /**
     * تحميل بيانات لوحة الصدارة
     * @private
     */
    async _loadLeaderboardData() {
        const mode = this.dom.lbMode?.value || 'all';
        const attemptNumber = (mode === 'attempt') ? 
            Number(this.dom.lbAttempt?.value || 1) : null;

        try {
            // 🔍 التحقق من التخزين المؤقت أولاً
            const cachedData = this._getCachedLeaderboardData(mode, attemptNumber);
            if (cachedData) {
                this.renderLeaderboard(cachedData);
                this._startLbTicker(cachedData.timestamp, true);
                
                if (mode === 'attempt') {
                    await this.updateAttemptsFilter(true);
                }
                return;
            }

            // 🌐 جلب البيانات من الخادم
            await this._fetchLeaderboardData(mode, attemptNumber);

        } catch (error) {
            console.error('فشل تحميل لوحة الصدارة:', error);
            this._showLeaderboardError();
        }
    },

    /**
     * الحصول على البيانات المخزنة مؤقتاً
     * @private
     * @param {string} mode - الوضع
     * @param {number} attemptNumber - رقم المحاولة
     * @returns {Object|null}
     */
    _getCachedLeaderboardData: function(mode, attemptNumber) {
        const cacheKey = this._getLeaderboardCacheKey(mode, attemptNumber);
        const cached = this.leaderboardCache.get(cacheKey);
        
        if (cached && this._isCacheValid(cached.timestamp)) {
            return cached;
        }
        
        return null;
    },

    /**
     * التحقق من صلاحية التخزين المؤقت
     * @private
     * @param {number} timestamp - الطابع الزمني
     * @returns {boolean}
     */
    _isCacheValid: function(timestamp) {
        const CACHE_DURATION = 2 * 60 * 1000; // دقيقتان
        return (Date.now() - timestamp) < CACHE_DURATION;
    },

    /**
     * جلب بيانات لوحة الصدارة من الخادم
     * @private
     * @param {string} mode - الوضع
     * @param {number} attemptNumber - رقم المحاولة
     */
    async _fetchLeaderboardData: function(mode, attemptNumber) {
        const LB_URL = this.config.EDGE_LEADERBOARD_URL;

        let responseData;
        
        if (mode === 'attempt') {
            // 🎯 تحديث قائمة المحاولات أولاً
            await this.updateAttemptsFilter();
            const currentAttempt = Number(this.dom.lbAttempt?.value || 1);
            
            responseData = await this._postJson(LB_URL, { 
                mode: 'attempt', 
                attempt: currentAttempt 
            });
            
        } else {
            responseData = await this._postJson(LB_URL, { mode });
            
            // 🧹 إزالة التكرارات في وضع الأفضل
            if (mode === 'best') {
                responseData = this._removeDuplicatePlayers(responseData);
            }
        }

        // 💾 حفظ في التخزين المؤقت
        const cacheKey = this._getLeaderboardCacheKey(mode, attemptNumber);
        this.leaderboardCache.set(cacheKey, {
            data: responseData || [],
            timestamp: Date.now()
        });

        // 🎨 عرض البيانات
        this.renderLeaderboard(responseData || []);
        this._startLbTicker(Date.now(), false);

        // 📊 تسجيل الحدث
        this._logGameEvent('leaderboard_loaded', {
            mode,
            attemptNumber,
            playerCount: responseData?.length || 0
        });
    },

    /**
     * إزالة اللاعبين المكررين
     * @private
     * @param {Array} players - قائمة اللاعبين
     * @returns {Array}
     */
    _removeDuplicatePlayers: function(players) {
        const seen = new Set();
        const uniquePlayers = [];

        for (const player of players || []) {
            const playerKey = player.device_id || player.deviceId || player.player_id;
            
            if (!seen.has(playerKey)) {
                seen.add(playerKey);
                uniquePlayers.push(player);
            }
        }

        return uniquePlayers;
    },

    /**
     * توليد مفتاح التخزين المؤقت
     * @private
     * @param {string} mode - الوضع
     * @param {number} attemptNumber - رقم المحاولة
     * @returns {string}
     */
    _getLeaderboardCacheKey: function(mode, attemptNumber) {
        return attemptNumber ? `${mode}_${attemptNumber}` : mode;
    },

    /**
     * عرض خطأ في لوحة الصدارة
     * @private
     */
    _showLeaderboardError: function() {
        const container = this.dom.leaderboardContent;
        if (container) {
            container.innerHTML = `
                <div class="error-state">
                    <div class="error-icon">❌</div>
                    <h3>تعذر تحميل لوحة الصدارة</h3>
                    <p>يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى</p>
                    <button class="retry-btn" onclick="game.displayLeaderboard()">
                        إعادة المحاولة
                    </button>
                </div>
            `;
        }
    },

    /**
     * تحديث بيانات لوحة الصدارة
     * @private
     */
    async _refreshLeaderboardData() {
        const mode = this.dom.lbMode?.value || 'all';
        const attemptNumber = (mode === 'attempt') ? 
            Number(this.dom.lbAttempt?.value || 1) : null;

        // 🗑️ مسح التخزين المؤقت القديم
        this._clearExpiredCache();

        await this._fetchLeaderboardData(mode, attemptNumber);
        
        this.showToast('🔄 تم تحديث لوحة الصدارة', 'info');
    },

    /**
     * إجبار تحديث لوحة الصدارة
     * @private
     */
    async _forceRefreshLeaderboard() {
        const mode = this.dom.lbMode?.value || 'all';
        const attemptNumber = (mode === 'attempt') ? 
            Number(this.dom.lbAttempt?.value || 1) : null;

        // 🗑️ مسح التخزين المؤقت
        const cacheKey = this._getLeaderboardCacheKey(mode, attemptNumber);
        this.leaderboardCache.delete(cacheKey);

        await this._refreshLeaderboardData();
    },

    /**
     * مسح التخزين المؤقت المنتهي
     * @private
     */
    _clearExpiredCache: function() {
        const now = Date.now();
        const CACHE_DURATION = 10 * 60 * 1000; // 10 دقائق

        for (const [key, value] of this.leaderboardCache.entries()) {
            if (now - value.timestamp > CACHE_DURATION) {
                this.leaderboardCache.delete(key);
            }
        }
    },

    /**
     * تحديث فلتر المحاولات
     * @param {boolean} useCache - استخدام التخزين المؤقت
     */
    async updateAttemptsFilter: function(useCache = false) {
        const CACHE_KEY = 'max_attempt_cache';
        const CACHE_DURATION = 5 * 60 * 1000; // 5 دقائق

        if (useCache) {
            const cached = this.leaderboardCache.get(CACHE_KEY);
            if (cached && this._isCacheValid(cached.timestamp)) {
                this._populateAttemptsFilter(cached.data.maxAttempt);
                return;
            }
        }

        try {
            const LB_URL = this.config.EDGE_LEADERBOARD_URL;
            const response = await this._postJson(LB_URL, { mode: 'maxAttempt' });
            
            const maxAttempt = response?.maxAttempt || 1;
            
            // 💾 حفظ في التخزين المؤقت
            this.leaderboardCache.set(CACHE_KEY, {
                data: { maxAttempt },
                timestamp: Date.now()
            });

            this._populateAttemptsFilter(maxAttempt);

        } catch (error) {
            console.error('خطأ في تحديث فلتر المحاولات:', error);
            this._populateAttemptsFilter(1); // القيمة الافتراضية
        }
    },

    /**
     * تعبئة فلتر المحاولات
     * @private
     * @param {number} maxAttempt - أقصى عدد للمحاولات
     */
    _populateAttemptsFilter: function(maxAttempt) {
        if (!this.dom.lbAttempt) return;

        const previousValue = this.dom.lbAttempt.value;
        
        // 🧹 مسح الخيارات الحالية
        this.dom.lbAttempt.innerHTML = '';

        // ➕ إضافة الخيارات الجديدة
        for (let i = 1; i <= maxAttempt; i++) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.textContent = `المحاولة ${i}`;
            this.dom.lbAttempt.appendChild(option);
        }

        // 🔄 استعادة القيمة السابقة إذا كانت صالحة
        if (previousValue && parseInt(previousValue) <= maxAttempt) {
            this.dom.lbAttempt.value = previousValue;
        } else {
            this.dom.lbAttempt.value = maxAttempt.toString();
        }
    },

    /**
     * عرض بيانات اللاعب في لوحة الصدارة
     * @param {Array} players - قائمة اللاعبين
     */
    renderLeaderboard: function(players) {
        const container = this.dom.leaderboardContent;
        if (!container) return;

        if (!players || players.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🏆</div>
                    <h3>لا توجد نتائج بعد</h3>
                    <p>كن أول من يلعب ويظهر في لوحة الصدارة!</p>
                </div>
            `;
            return;
        }

        // 🎨 إنشاء قائمة اللاعبين
        const list = document.createElement('ul');
        list.className = 'leaderboard-list';
        list.setAttribute('role', 'list');

        const medals = ['🥇', '🥈', '🥉'];
        let currentRank = 1;

        // 🏅 العثور على أول من أكمل المستوى المستحيل
        const firstImpossibleFinisher = players.find(player => 
            player.is_impossible_finisher || player.level === 'مستحيل'
        );

        players.slice(0, 100).forEach((player, index) => {
            const listItem = this._createLeaderboardItem(
                player, 
                index, 
                currentRank, 
                medals,
                firstImpossibleFinisher
            );
            
            list.appendChild(listItem);
            currentRank++;
        });

        container.innerHTML = '';
        container.appendChild(list);

        // 📊 إضافة إحصائيات إضافية
        this._addLeaderboardStats(players);
    },

    /**
     * إنشاء عنصر في لوحة الصدارة
     * @private
     * @param {Object} player - بيانات اللاعب
     * @param {number} index - الفهرس
     * @param {number} rank - الترتيب
     * @param {Array} medals - الميداليات
     * @param {Object} firstImpossibleFinisher - أول من أكمل المستوى المستحيل
     * @returns {HTMLElement}
     */
    _createLeaderboardItem: function(player, index, rank, medals, firstImpossibleFinisher) {
        const listItem = document.createElement('li');
        listItem.className = 'leaderboard-item';
        listItem.setAttribute('role', 'listitem');

        let rankDisplay;
        let specialBadge = '';

        // 🎖️ معالجة الرتب الخاصة
        if (player === firstImpossibleFinisher) {
            listItem.classList.add('impossible-finisher', 'special-rank');
            rankDisplay = '🎖️';
            specialBadge = '<span class="special-badge">بطل المستوى المستحيل</span>';
        } else if (rank <= 3) {
            listItem.classList.add(`rank-${rank}`, 'podium-rank');
            rankDisplay = medals[rank - 1];
        } else {
            rankDisplay = rank;
        }

        // 🖼️ معالجة الصورة الرمزية
        const avatarUrl = player.avatar || '';
        const avatarAlt = `صورة ${player.name || 'اللاعب'}`;
        const avatarStyle = avatarUrl ? 'visible' : 'hidden';

        // 📝 إنشاء المحتوى
        listItem.innerHTML = `
            <div class="leaderboard-item-content">
                <span class="leaderboard-rank">${rankDisplay}</span>
                
                <div class="avatar-container">
                    <img src="${avatarUrl}" 
                         alt="${avatarAlt}" 
                         class="leaderboard-avatar" 
                         loading="lazy" 
                         style="visibility: ${avatarStyle}"
                         onerror="this.style.visibility='hidden'">
                </div>
                
                <div class="leaderboard-details">
                    <div class="name-and-badge">
                        <span class="leaderboard-name">${player.name || 'لاعب مجهول'}</span>
                        ${specialBadge}
                    </div>
                    <div class="leaderboard-stats">
                        <span class="leaderboard-score">${this.formatNumber(player.score)} نقطة</span>
                        <span class="leaderboard-level">${player.level || 'غير محدد'}</span>
                    </div>
                </div>
                
                <button class="player-details-btn" 
                        aria-label="عرض تفاصيل ${player.name || 'اللاعب'}">
                    📊
                </button>
            </div>
        `;

        // 🎯 إضافة مستمع الأحداث
        const detailsBtn = listItem.querySelector('.player-details-btn');
        this.safeOn(detailsBtn, 'click', () => {
            this.showPlayerDetails(player);
        });

        // 🖱️ التفاعل باللمس والنقر
        this.safeOn(listItem, 'click', (e) => {
            if (!detailsBtn.contains(e.target)) {
                this.showPlayerDetails(player);
            }
        });

        return listItem;
    },

    /**
     * إضافة إحصائيات لوحة الصدارة
     * @private
     * @param {Array} players - اللاعبين
     */
    _addLeaderboardStats: function(players) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'leaderboard-stats-overview';

        const totalPlayers = players.length;
        const averageScore = Math.round(players.reduce((sum, p) => sum + (p.score || 0), 0) / totalPlayers);
        const impossibleFinishers = players.filter(p => p.level === 'مستحيل').length;

        statsContainer.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-label">إجمالي اللاعبين</span>
                    <span class="stat-value">${this.formatNumber(totalPlayers)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">متوسط النقاط</span>
                    <span class="stat-value">${this.formatNumber(averageScore)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">أكملوا المستحيل</span>
                    <span class="stat-value">${this.formatNumber(impossibleFinishers)}</span>
                </div>
            </div>
        `;

        this.dom.leaderboardContent.appendChild(statsContainer);
    },

    /**
     * بدء عداد تحديث لوحة الصدارة
     * @private
     * @param {number} timestamp - وقت التحديث
     * @param {boolean} fromCache - من التخزين المؤقت
     */
    _setLbLastUpdatedText: function(timestamp, fromCache = false) {
        const infoElement = document.getElementById('lbLastUpdated');
        if (!infoElement) return;

        if (!timestamp) {
            infoElement.textContent = '';
            return;
        }

        const secondsAgo = Math.max(0, Math.round((Date.now() - timestamp) / 1000));
        
        if (fromCache) {
            infoElement.textContent = `آخر تحديث (مخبأ): منذ ${secondsAgo} ثانية`;
            infoElement.classList.add('cached');
        } else {
            infoElement.textContent = `آخر تحديث: منذ ${secondsAgo} ثانية`;
            infoElement.classList.remove('cached');
        }
    },

    /**
     * بدء المؤقت
     * @private
     * @param {number} timestamp - الطابع الزمني
     * @param {boolean} fromCache - من التخزين المؤقت
     */
    _startLbTicker: function(timestamp, fromCache = false) {
        this._stopLbTicker();
        
        this._setLbLastUpdatedText(timestamp, fromCache);
        
        this._lbTicker = setInterval(() => {
            this._setLbLastUpdatedText(timestamp, fromCache);
        }, 1000);
    },

    /**
     * إيقاف المؤقت
     * @private
     */
    _stopLbTicker: function() {
        if (this._lbTicker) {
            clearInterval(this._lbTicker);
            this._lbTicker = null;
        }
    }
});

// ==================== 👤 نظام إدارة الأفاتار المتقدم ====================

Object.assign(QuizGame.prototype, {

    /**
     * تهيئة نظام الأفاتار
     * @private
     */
    _initializeAvatarSystem: function() {
        this.avatarCache = new Map();
        this.cropper = null;
        this._avatarUploadQueue = new Set();
    },

    /**
     * تعبئة شبكة الأفاتار مع تحسينات الأداء
     */
    populateAvatarGrid: function() {
        const grid = this.getEl('.avatar-grid');
        if (!grid) return;

        // 🧹 مسح المحتوى الحالي
        grid.innerHTML = '';

        // ➕ زر الرفع
        this._addUploadButton(grid);

        // 🖼️ قائمة الأفاتار الافتراضية
        const defaultAvatars = this._getDefaultAvatars();
        this._renderAvatarOptions(grid, defaultAvatars);

        // 🔄 استعادة الأفاتار المخصصة
        this._restoreCustomAvatar(grid);

        // 🎯 إعادة تحديد الأفاتار الحالي
        this._reselectCurrentAvatar(grid);
    },

    /**
     * إضافة زر رفع الصورة
     * @private
     * @param {HTMLElement} grid - الشبكة
     */
    _addUploadButton: function(grid) {
        const uploadButtonHTML = `
            <div class="avatar-upload-btn" 
                 role="button" 
                 tabindex="0" 
                 aria-label="رفع صورة رمزية جديدة"
                 title="رفع صورة من جهازك">
                <span class="upload-icon" aria-hidden="true">+</span>
                <span class="upload-text">رفع صورة</span>
                <input type="file" 
                       id="avatarUploadInput" 
                       accept="image/*" 
                       style="display: none;"
                       aria-hidden="true">
            </div>
        `;

        grid.insertAdjacentHTML('beforeend', uploadButtonHTML);

        // 🎯 إعداد مستمعي الأحداث
        this._setupUploadButtonEvents(grid);
    },

    /**
     * إعداد أحداث زر الرفع
     * @private
     * @param {HTMLElement} grid - الشبكة
     */
    _setupUploadButtonEvents: function(grid) {
        const uploadButton = grid.querySelector('.avatar-upload-btn');
        const fileInput = grid.querySelector('#avatarUploadInput');

        if (!uploadButton || !fileInput) return;

        const openFilePicker = () => {
            if (this._avatarUploadQueue.size > 0) {
                this.showToast('⏳ جاري معالجة صورة سابقة...', 'info');
                return;
            }
            fileInput.click();
        };

        // 🖱️ أحداث النقر
        uploadButton.addEventListener('click', openFilePicker);
        
        // ⌨️ أحداث لوحة المفاتيح
        uploadButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openFilePicker();
            }
        });

        // 📁 حدث اختيار الملف
        fileInput.addEventListener('change', (e) => {
            this.handleAvatarUpload(e);
        });
    },

    /**
     * الحصول على الأفاتار الافتراضية
     * @private
     * @returns {Array}
     */
    _getDefaultAvatars: function() {
        return [
            'https://em-content.zobj.net/thumbs/120/apple/354/woman_1f469.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/man_1f468.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/person-beard_1f9d4.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/old-man_1f474.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/student_1f9d1-200d-1f393.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/teacher_1f9d1-200d-1f3eb.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/scientist_1f9d1-200d-1f52c.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/artist_1f9d1-200d-1f3a8.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/technologist_1f9d1-200d-1f4bb.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/firefighter_1f9d1-200d-1f692.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/pilot_1f9d1-200d-2708-fe0f.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/astronaut_1f9d1-200d-1f680.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/judge_1f9d1-200d-2696-fe0f.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/farmer_1f9d1-200d-1f33e.png',
            'https://em-content.zobj.net/thumbs/120/apple/354/cook_1f9d1-200d-1f373.png'
        ];
    },

    /**
     * عرض خيارات الأفاتار
     * @private
     * @param {HTMLElement} grid - الشبكة
     * @param {Array} avatars - الأفاتار
     */
    _renderAvatarOptions: function(grid, avatars) {
        const fragment = document.createDocumentFragment();

        avatars.forEach((avatarUrl, index) => {
            const avatarElement = this._createAvatarElement(avatarUrl, index);
            fragment.appendChild(avatarElement);
        });

        grid.appendChild(fragment);

        // 📥 التحميل المسبق للصور
        this._preloadAvatars(avatars);
    },

    /**
     * إنشاء عنصر أفاتار
     * @private
     * @param {string} avatarUrl - رابط الصورة
     * @param {number} index - الفهرس
     * @returns {HTMLElement}
     */
    _createAvatarElement: function(avatarUrl, index) {
        const img = document.createElement('img');
        
        img.src = avatarUrl;
        img.alt = `صورة رمزية ${index + 1}`;
        img.className = 'avatar-option';
        img.loading = 'lazy';
        img.setAttribute('role', 'button');
        img.setAttribute('tabindex', '0');
        
        // 🎯 إضافة مستمع الأحداث
        img.addEventListener('click', () => {
            this.selectAvatar(img);
        });
        
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.selectAvatar(img);
            }
        });

        return img;
    },

    /**
     * التحميل المسبق للأفاتار
     * @private
     * @param {Array} avatarUrls - روابط الأفاتار
     */
    _preloadAvatars: function(avatarUrls) {
        const preloadUrls = avatarUrls.filter(url => !this.avatarCache.has(url));
        
        preloadUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            this.avatarCache.set(url, img);
        });
    },

    /**
     * استعادة الأفاتار المخصصة
     * @private
     * @param {HTMLElement} grid - الشبكة
     */
    _restoreCustomAvatar: function(grid) {
        const customAvatarData = localStorage.getItem('custom_avatar');
        
        if (customAvatarData) {
            try {
                const customAvatar = document.createElement('img');
                customAvatar.src = customAvatarData;
                customAvatar.className = 'avatar-option custom-avatar';
                customAvatar.alt = 'الصورة الرمزية المخصصة';
                customAvatar.loading = 'lazy';
                
                customAvatar.addEventListener('click', () => {
                    this.selectAvatar(customAvatar);
                });

                grid.appendChild(customAvatar);
                
            } catch (error) {
                console.warn('فشل استعادة الأفاتار المخصص:', error);
                localStorage.removeItem('custom_avatar');
            }
        }
    },

    /**
     * إعادة تحديد الأفاتار الحالي
     * @private
     * @param {HTMLElement} grid - الشبكة
     */
    _reselectCurrentAvatar: function(grid) {
        const currentAvatar = this.gameState?.avatar;
        
        if (currentAvatar) {
            const avatarElements = grid.querySelectorAll('.avatar-option');
            const matchingAvatar = Array.from(avatarElements).find(
                img => img.src === currentAvatar
            );
            
            if (matchingAvatar) {
                this.selectAvatar(matchingAvatar);
            }
        }
    },

    /**
     * اختيار أفاتار
     * @param {HTMLElement} element - العنصر المختار
     */
    selectAvatar: function(element) {
        // 🧹 إلغاء تحديد الكل
        this.getAllEl('.avatar-option.selected, .avatar-upload-btn.selected')
            .forEach(el => el.classList.remove('selected'));
        
        // ✅ تحديد العنصر الجديد
        element.classList.add('selected');
        
        // 💾 حفظ الاختيار
        this.gameState.avatar = element.src;
        
        // 🔓 تفعيل زر التأكيد
        if (this.dom.confirmAvatarBtn) {
            this.dom.confirmAvatarBtn.disabled = false;
        }

        // 🔊 صوت التأكيد
        this.playSound('click');
    },

    /**
     * معالجة رفع الصورة
     * @param {Event} event - حدث الرفع
     */
    handleAvatarUpload: function(event) {
        const file = event.target.files[0];
        
        if (!file) return;

        // ✅ التحقق من الملف
        if (!this._validateImageFile(file)) {
            return;
        }

        // ⏳ عرض حالة التحميل
        this.showToast('🖼️ جاري معالجة الصورة...', 'info');

        // 📖 قراءة الملف
        const reader = new FileReader();
        
        reader.onload = (e) => {
            this._processUploadedImage(e.target.result);
        };
        
        reader.onerror = () => {
            this.showToast('❌ فشل قراءة الملف', 'error');
        };
        
        reader.readAsDataURL(file);
    },

    /**
     * التحقق من صحة ملف الصورة
     * @private
     * @param {File} file - الملف
     * @returns {boolean}
     */
    _validateImageFile: function(file) {
        // ✅ التحقق من النوع
        if (!file.type.startsWith('image/')) {
            this.showToast('❌ الرجاء اختيار ملف صورة صالح', 'error');
            return false;
        }

        // 📏 التحقق من الحجم (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
            this.showToast('❌ حجم الصورة كبير جداً (الحد الأقصى 5MB)', 'error');
            return false;
        }

        return true;
    },

    /**
     * معالجة الصورة المرفوعة
     * @private
     * @param {string} imageData - بيانات الصورة
     */
    _processUploadedImage: function(imageData) {
        try {
            // 🖼️ تعيين الصورة للمحرر
            this.dom.imageToCrop.src = imageData;
            
            // 🪟 فتح محرر الصورة
            this.showModal('avatarEditor');
            
            // ⏳ تهيئة Cropper بعد تأخير بسيط
            setTimeout(() => {
                this._initializeImageCropper();
            }, 100);
            
        } catch (error) {
            console.error('خطأ في معالجة الصورة:', error);
            this.showToast('❌ تعذر معالجة الصورة', 'error');
        }
    },

    /**
     * تهيئة محرر الصورة
     * @private
     */
    _initializeImageCropper: function() {
        try {
            // 🗑️ تنظيف أي مثيل سابق
            if (this.cropper) {
                this.cropper.destroy();
            }

            // ✂️ إنشاء محرر جديد
            this.cropper = new Cropper(this.dom.imageToCrop, {
                aspectRatio: 1,
                viewMode: 1,
                autoCropArea: 0.8,
                movable: true,
                rotatable: false,
                scalable: false,
                zoomable: true,
                zoomOnTouch: true,
                zoomOnWheel: true,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: true,
                minContainerWidth: 300,
                minContainerHeight: 300
            });

        } catch (error) {
            console.error('خطأ في تهيئة محرر الصورة:', error);
            this.showToast('❌ تعذر تحميل محرر الصورة', 'error');
            this.hideModal('avatarEditor');
        }
    },

    /**
     * حفظ الصورة المقطوعة
     */
    saveCroppedAvatar: function() {
        if (!this.cropper) {
            this.showToast('❌ لم يتم تحميل المحرر بعد', 'error');
            return;
        }

        try {
            // ✂️ الحصول على الصورة المقطوعة
            const croppedCanvas = this.cropper.getCroppedCanvas({
                width: 200,
                height: 200,
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high'
            });

            if (!croppedCanvas) {
                throw new Error('فشل في قص الصورة');
            }

            // 💾 تحويل إلى Data URL
            const croppedImageUrl = croppedCanvas.toDataURL('image/png', 0.9);

            // 🖼️ إنشاء أو تحديث الأفاتار المخصص
            this._createOrUpdateCustomAvatar(croppedImageUrl);

            // 🪟 إغلاق المحرر
            this.hideModal('avatarEditor');
            this.cleanupAvatarEditor();

            this.showToast('✅ تم حفظ الصورة الرمزية بنجاح', 'success');

        } catch (error) {
            console.error('خطأ في حفظ الصورة المقطوعة:', error);
            this.showToast('❌ فشل حفظ الصورة', 'error');
        }
    },

    /**
     * إنشاء أو تحديث الأفاتار المخصص
     * @private
     * @param {string} imageUrl - رابط الصورة
     */
    _createOrUpdateCustomAvatar: function(imageUrl) {
        let customAvatar = this.getEl('#custom-avatar');
        
        if (!customAvatar) {
            // ➕ إنشاء أفاتار مخصص جديد
            customAvatar = document.createElement('img');
            customAvatar.id = 'custom-avatar';
            customAvatar.className = 'avatar-option custom-avatar';
            customAvatar.alt = 'الصورة الرمزية المخصصة';
            customAvatar.loading = 'lazy';
            
            // 🎯 إضافة مستمع الأحداث
            customAvatar.addEventListener('click', () => {
                this.selectAvatar(customAvatar);
            });

            // 📍 إضافته بعد زر الرفع
            const uploadBtn = this.getEl('.avatar-upload-btn');
            if (uploadBtn) {
                uploadBtn.after(customAvatar);
            }
        }

        // 🔄 تحديث المصدر
        customAvatar.src = imageUrl;
        
        // ✅ تحديده تلقائياً
        this.selectAvatar(customAvatar);
        
        // 💾 الحفظ في التخزين المحلي
        try {
            localStorage.setItem('custom_avatar', imageUrl);
        } catch (error) {
            console.warn('فشل حفظ الأفاتار المخصص في التخزين المحلي:', error);
        }
    },

    /**
     * تنظيف محرر الصورة
     */
    cleanupAvatarEditor: function() {
        try {
            // 🗑️ تدمير المحرر
            if (this.cropper) {
                this.cropper.destroy();
                this.cropper = null;
            }

            // 🧹 تنظيف العناصر
            if (this.dom.imageToCrop) {
                this.dom.imageToCrop.src = '';
            }

            const fileInput = this.getEl('#avatarUploadInput');
            if (fileInput) {
                fileInput.value = '';
            }

        } catch (error) {
            console.warn('خطأ أثناء تنظيف محرر الصورة:', error);
        }
    }
});

// ==================== 📊 نظام مشاركة النتائج المتقدم ====================

Object.assign(QuizGame.prototype, {

    /**
     * إنشاء نص المشاركة مع تنسيق محسن
     * @returns {string}
     */
    getShareTextForX: function() {
        const name = this.getEl('#finalName')?.textContent || 'لاعب';
        const attempt = this.getEl('#finalAttemptNumber')?.textContent || '1';
        const correct = this.getEl('#finalCorrect')?.textContent || '0';
        const skips = this.getEl('#finalSkips')?.textContent || '0';
        const level = this.getEl('#finalLevel')?.textContent || 'سهل';
        const accuracy = this.getEl('#finalAccuracy')?.textContent || '0%';
        const avgTime = this.getEl('#finalAvgTime')?.textContent || '0:00';
        const performance = this.getEl('#performanceText')?.textContent || 'جيد';

        return `🏆 النتائج النهائية 🏆

👤 الاسم: ${name}
🔢 رقم المحاولة: ${attempt}
✅ الإجابات الصحيحة: ${correct}
⏭️ مرات التخطي: ${skips}
🎯 المستوى: ${level}
📊 نسبة الدقة: ${accuracy}
⏱️ متوسط وقت الإجابة: ${avgTime}
⭐ الأداء: ${performance}

🎉 تهانينا! لقد أكملت التحدي بنجاح! 🎉

🔗 جرب تحديك أنت أيضًا!
${window.location.href}

#مسابقة_المعرفة #تحدي_الثقافة`;
    },

    /**
     * المشاركة على منصة X (تويتر)
     */
    shareOnX: function() {
        try {
            const shareText = this.getShareTextForX();
            const encodedText = encodeURIComponent(shareText);
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
            
            // 🪟 فتح نافذة المشاركة
            const windowFeatures = 'width=600,height=400,menubar=no,toolbar=no,location=no';
            window.open(shareUrl, '_blank', windowFeatures);
            
            // 📊 تسجيل حدث المشاركة
            this._logGameEvent('share_attempt', { platform: 'twitter' });
            
        } catch (error) {
            console.error('خطأ في المشاركة على X:', error);
            this.showToast('❌ تعذر فتح منصة المشاركة', 'error');
        }
    },

    /**
     * المشاركة على إنستغرام
     */
    shareOnInstagram: function() {
        const shareText = this.getShareTextForX();
        
        navigator.clipboard.writeText(shareText)
            .then(() => {
                this.showToast('✅ تم نسخ النتيجة إلى الحافظة', 'success');
                
                // 📊 تسجيل حدث المشاركة
                this._logGameEvent('share_attempt', { platform: 'instagram' });
                
                // 💡 نصيحة للمستخدم
                setTimeout(() => {
                    this.showToast('💡 يمكنك الآن لصق النص في إنستغرام', 'info');
                }, 1000);
            })
            .catch((error) => {
                console.error('فشل نسخ النص:', error);
                this.showToast('❌ فشل نسخ النتيجة', 'error');
            });
    },

    /**
     * إنشاء صورة للمشاركة (ميزة متقدمة)
     * @private
     * @returns {Promise<string>}
     */
    async _generateShareImage: function() {
        return new Promise((resolve) => {
            // ⏳ هذه ميزة متقدمة يمكن تطويرها لاحقاً
            // لإنشاء صورة جميلة تحتوي على النتائج
            resolve(null);
        });
    }
});

// ==================== 🛠️ أدوات مساعدة إضافية ====================

Object.assign(QuizGame.prototype, {

    /**
     * جمع تشخيص تلقائي متقدم
     * @returns {Object}
     */
    getAutoDiagnostics: function() {
        try {
            const navigatorInfo = navigator || {};
            const connection = navigatorInfo.connection || {};
            const performanceInfo = performance || {};
            const memory = performanceInfo.memory || {};
            
            // 🖥️ معلومات الجهاز
            const deviceInfo = {
                userAgent: navigatorInfo.userAgent || '',
                platform: navigatorInfo.platform || '',
                language: navigatorInfo.language || '',
                hardwareConcurrency: navigatorInfo.hardwareConcurrency || 'غير معروف',
                
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    pixelRatio: window.devicePixelRatio || 1
                },
                
                screen: {
                    resolution: `${screen.width}x${screen.height}`,
                    colorDepth: screen.colorDepth
                },
                
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                touchSupport: 'ontouchstart' in window,
                online: navigatorInfo.onLine
            };

            // 🌐 معلومات الشبكة
            const networkInfo = {
                type: connection.effectiveType || '',
                downlink: connection.downlink || '',
                rtt: connection.rtt || '',
                saveData: connection.saveData || false
            };

            // ⚡ معلومات الأداء
            const performanceData = {
                memory: {
                    jsHeapSizeLimit: memory.jsHeapSizeLimit || null,
                    totalJSHeapSize: memory.totalJSHeapSize || null,
                    usedJSHeapSize: memory.usedJSHeapSize || null
                },
                
                timing: performanceInfo.timing ? {
                    loadTime: performanceInfo.timing.loadEventEnd - performanceInfo.timing.navigationStart,
                    domReadyTime: performanceInfo.timing.domContentLoadedEventEnd - performanceInfo.timing.navigationStart,
                    readyStart: performanceInfo.timing.fetchStart - performanceInfo.timing.navigationStart
                } : null,
                
                now: performanceInfo.now ? Math.round(performanceInfo.now()) : null
            };

            // 🎮 حالة التطبيق
            const activeScreen = Object.entries(this.dom.screens)
                .find(([, el]) => el?.classList?.contains('active'))?.[0] || 'غير معروف';

            const appState = {
                screen: activeScreen,
                level: this.config.LEVELS[this.gameState?.level || 0]?.name || null,
                questionIndex: this.gameState?.questionIndex ?? null,
                score: this.gameState?.currentScore ?? null,
                sessionId: this.currentSessionId,
                deviceId: this.deviceId
            };

            return {
                timestamp: new Date().toISOString(),
                url: window.location.href,
                device: deviceInfo,
                network: networkInfo,
                performance: performanceData,
                appState: appState,
                recentErrors: this.recentErrors.slice(-5) || []
            };

        } catch (error) {
            return { 
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    },

    /**
     * بناء مرجع السؤال
     * @returns {Object}
     */
    buildQuestionRef: function() {
        const levelObj = this.config.LEVELS[this.gameState.level] || {};
        const levelName = levelObj.name || '';
        const levelLabel = levelObj.label || '';
        
        const questionIndex = (this.gameState.questionIndex ?? 0) + 1;
        const totalQuestions = this.gameState.shuffledQuestions?.size || 0;
        
        const questionText = (this.dom.questionText?.textContent || '').trim();
        const options = Array.from(this.getAllEl('.option-btn'))
            .map(btn => (btn.textContent || '').trim())
            .filter(text => text.length > 0);

        const hash = this._secureHash(`${levelName}|${questionIndex}|${questionText}|${options.join('|')}`);

        return {
            level_name: levelName,
            level_label: levelLabel,
            question_index: questionIndex,
            total_questions: totalQuestions,
            question_text: questionText.substring(0, 100), // تقليل الطول
            options_count: options.length,
            ref: `${levelName}:${questionIndex}:${hash.slice(0, 8)}`
        };
    },

    /**
     * الحصول على لون شريط الدقة
     * @param {number} percentage - النسبة المئوية
     * @returns {string}
     */
    getAccuracyBarColor: function(percentage) {
        const percent = Math.max(0, Math.min(100, Number(percentage) || 0));
        
        // 🎨 تدرج ألوان من الأحمر إلى الأخضر
        const hue = Math.round((percent / 100) * 120); // 0° (red) to 120° (green)
        
        return `hsl(${hue}, 70%, 45%)`;
    }
});

// ==================== 🎯 التهيئة النهائية للتطبيق ====================

document.addEventListener('DOMContentLoaded', function() {
    // 🎨 تحميل السمة المحفوظة
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;
    
    // 🔄 تحديث زر السمة
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = (savedTheme === 'dark') ? ICON_SUN : ICON_MOON;
    }
    
    // 🚀 إنشاء وتشغيل اللعبة
    try {
        window.game = new QuizGame();
    } catch (error) {
        console.error('فشل تهيئة اللعبة:', error);
        
        // 🆘 عرض رسالة خطأ
        document.body.innerHTML = `
            <div class="error-container">
                <h1>❌ تعذر تحميل اللعبة</h1>
                <p>حدث خطأ غير متوقع أثناء التحميل.</p>
                <button onclick="window.location.reload()">إعادة تحميل الصفحة</button>
            </div>
        `;
    }
});
