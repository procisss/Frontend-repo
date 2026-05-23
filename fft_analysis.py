import numpy as np
import matplotlib.pyplot as plt

# Frequency axis
f = np.linspace(0.001, 0.6, 100)

# Convergent series:
# approaches 0 from negative valuesw
convergent = -20 * np.log10(f + 0.1)

# Divergent series:
# grows toward positive infinity
divergent = -20 * np.log10(1 - f)

# Add slight random variations
np.random.seed(1)
convergent += np.random.normal(0, 1.5, len(f))
divergent += np.random.normal(0, 1.8, len(f))

# Create figure
plt.figure(figsize=(7,5))

# Plot lines
plt.plot(f, convergent, linewidth=2, label='Convergent Series')
plt.plot(f, divergent, linewidth=2, label='Divergent Series')

# Labels and title
plt.xlabel('Frequency')
plt.ylabel('Magnitude')
plt.title('FFT Comparison Between Convergent and Divergent Series')

# Grid and legend
plt.grid(True)
plt.legend()

# Save figure
plt.savefig('fft_analysis.png', dpi=300, bbox_inches='tight')

# Show figure
plt.show()