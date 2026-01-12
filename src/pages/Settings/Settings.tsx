import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'es' | 'fr' | 'de';

interface SettingsState {
    username: string;
    email: string;
    notifications: boolean;
    theme: Theme;
    language: Language;
}

const STORAGE_KEY = 'appSettings';

const defaultSettings: SettingsState = {
    username: '',
    email: '',
    notifications: true,
    theme: 'light',
    language: 'en',
};

export default function Settings(): JSX.Element {
    const [values, setValues] = useState<SettingsState>(defaultSettings);
    const [status, setStatus] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ email?: string; username?: string }>(
        {}
    );

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);

            if (raw) {
                setValues((prev) => ({
                    ...prev,
                    ...(JSON.parse(raw) as Partial<SettingsState>),
                }));
            }
        } catch {
            // ignore parse errors
        }
    }, []);

    function validate(v: SettingsState) {
        const e: typeof errors = {};

        if (!v.username.trim()) e.username = 'Username is required';
        // simple email check
        if (v.email && !/^\S+@\S+\.\S+$/.test(v.email))
            e.email = 'Invalid email';
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleChange<K extends keyof SettingsState>(
        key: K,
        value: SettingsState[K]
    ) {
        setValues((prev) => {
            const next = { ...prev, [key]: value };

            // clear previous status when user edits
            setStatus(null);
            // immediate validation for username/email
            if (key === 'email' || key === 'username') validate(next);
            return next;
        });
    }

    function handleSave(e?: React.FormEvent) {
        e?.preventDefault();
        if (!validate(values)) {
            setStatus('Fix validation errors before saving.');
            return;
        }
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
            setStatus('Settings saved.');
            // optionally clear status after a while
            setTimeout(() => setStatus(null), 2500);
        } catch {
            setStatus('Failed to save settings.');
        }
    }

    function handleReset() {
        setValues(defaultSettings);
        setErrors({});
        setStatus('Settings reset to defaults.');
        setTimeout(() => setStatus(null), 2000);
    }

    const containerStyle: React.CSSProperties = {
        maxWidth: 720,
        margin: '24px auto',
        padding: 20,
        border: '1px solid #e6e6e6',
        borderRadius: 8,
        fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        background: '#fff',
    };

    const rowStyle: React.CSSProperties = {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
    };
    const labelStyle: React.CSSProperties = {
        marginBottom: 6,
        fontWeight: 600,
        fontSize: 13,
    };
    const hintStyle: React.CSSProperties = { color: '#666', fontSize: 12 };

    return (
        <main style={containerStyle}>
            <h1 style={{ marginTop: 0 }}>Settings</h1>

            <form onSubmit={handleSave} aria-label="Settings form">
                <section style={rowStyle}>
                    <label style={labelStyle} htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        value={values.username}
                        onChange={(s) =>
                            handleChange('username', s.currentTarget.value)
                        }
                        style={{
                            padding: 8,
                            borderRadius: 4,
                            border: '1px solid #ccc',
                        }}
                        placeholder="Your display name"
                    />
                    {errors.username && (
                        <div style={{ color: 'crimson', marginTop: 6 }}>
                            {errors.username}
                        </div>
                    )}
                </section>

                <section style={rowStyle}>
                    <label style={labelStyle} htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        value={values.email}
                        onChange={(s) =>
                            handleChange('email', s.currentTarget.value)
                        }
                        style={{
                            padding: 8,
                            borderRadius: 4,
                            border: '1px solid #ccc',
                        }}
                        placeholder="you@example.com"
                        type="email"
                    />
                    {errors.email ? (
                        <div style={{ color: 'crimson', marginTop: 6 }}>
                            {errors.email}
                        </div>
                    ) : (
                        <div style={hintStyle}>
                            Used for notifications and account recovery
                        </div>
                    )}
                </section>

                <section style={rowStyle}>
                    <label style={labelStyle}>Notifications</label>
                    <label
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={values.notifications}
                            onChange={(e) =>
                                handleChange(
                                    'notifications',
                                    e.currentTarget.checked
                                )
                            }
                        />
                        Receive email notifications
                    </label>
                </section>

                <section style={rowStyle}>
                    <label style={labelStyle}>Theme</label>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <label>
                            <input
                                type="radio"
                                name="theme"
                                value="light"
                                checked={values.theme === 'light'}
                                onChange={() => handleChange('theme', 'light')}
                            />{' '}
                            Light
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="theme"
                                value="dark"
                                checked={values.theme === 'dark'}
                                onChange={() => handleChange('theme', 'dark')}
                            />{' '}
                            Dark
                        </label>
                    </div>
                </section>

                <section style={rowStyle}>
                    <label style={labelStyle} htmlFor="language">
                        Language
                    </label>
                    <select
                        id="language"
                        value={values.language}
                        onChange={(e) =>
                            handleChange(
                                'language',
                                e.currentTarget.value as Language
                            )
                        }
                        style={{
                            padding: 8,
                            borderRadius: 4,
                            border: '1px solid #ccc',
                            width: 220,
                        }}
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </section>

                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                    <button
                        type="submit"
                        style={{
                            padding: '8px 14px',
                            background: '#0078d4',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                        }}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        style={{
                            padding: '8px 14px',
                            background: '#f3f3f3',
                            border: '1px solid #ddd',
                            borderRadius: 4,
                            cursor: 'pointer',
                        }}
                    >
                        Reset
                    </button>
                </div>

                {status && (
                    <div
                        style={{
                            marginTop: 12,
                            color: status.includes('failed')
                                ? 'crimson'
                                : '#007600',
                        }}
                    >
                        {status}
                    </div>
                )}
            </form>
        </main>
    );
}
