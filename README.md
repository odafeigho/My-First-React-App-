# My-First-React-App-
This app facilitates data harmonization, designed specifically for reservoir engineers in the petroleum sector. It was made with TypeScript, JavaScript, and React.
Overview
The Reservoir Data Harmonizer is a specialized data integration application designed to address one of the most persistent challenges in reservoir engineering and petroleum data management: harmonizing heterogeneous datasets from multiple sources into a unified, analysis-ready model.

Problem Addressed
In reservoir engineering and petroleum geology, data comes from numerous sources in various formats:
	Well logs (gamma ray, resistivity, porosity)
	Seismic surveys (amplitude, frequency, velocity)
	Production data (oil/gas/water rates, pressure)
	Core analysis (permeability, porosity, saturation)
These datasets often exist in isolation, with different scales, units, and structures, making comprehensive analysis difficult. The Reservoir Data Harmonizer bridges this gap through mathematical normalization and schema transformation.

Core Algorithm
The application implements a two-step mathematical process:
1. Data Normalization:
	Formula: d_i^norm=(d_i  -〖 μ〗_i)/σ_i 
	Where d_i  represents raw data points, 〖 μ〗_i is the mean, and σ_i is the standard deviation.
	This standardizes all numeric values to comparable scales.
2. Schema Integration:
	Formula: M=⋃_(i=1)^n▒〖T(d_i^norm)〗
	Where T is a transformation function mapping normalized data to a unified schema.
	This creates a master table M containing all harmonized data.

Key Features
1. Multi-format Data Handling
	Support for well logs, seismic, production, and core analysis data.
	Extensible framework for additional data types.
	Robust validation and error handling.
2. Intelligent Data Processing
	Statistical analysis of datasets (mean, standard deviation, min/max).
	Outlier detection and handling.
	Missing value imputation using median values.
	Duplicate record identification and removal.
3. Interactive Workflow
	Step-by-step guided process from upload to integration.
	Real-time progress tracking and validation.
	Visual representation of the normalization process.
4. Results Management
	Unified data model with standardized schema.
	Export functionality for downstream analysis.
	Data quality metrics and validation reporting.
5. Educational Components
	Algorithm visualization and explanation.
	Mathematical representation of each processing step.
	Benefits and applications documentation.

Technical Implementation
The application is built as a modern web application with:
	React framework with functional components.
	Client-side data processing for privacy and performance.
	Responsive design for use on various devices.
	Comprehensive error handling and data validation.

Use Cases
1. Reservoir Characterization
Combine well logs, core data, and seismic information to create comprehensive reservoir models with consistent scales and units.
2. Production Analysis
Integrate production data with reservoir properties to identify correlations and optimize production strategies.
3. Data Quality Management
Identify inconsistencies, outliers, and gaps in reservoir datasets before critical decision-making.
4. Machine Learning Preparation
Create normalized, unified datasets ready for machine learning applications in reservoir prediction and optimization.
5. Knowledge Transfer
Standardize data from legacy fields and new acquisitions into a common format for comparative analysis.

Benefits:
	Time Efficiency: Automates the tedious process of manual data normalization.
	Error Reduction: Minimizes human error in data transformation.
	Analytical Power: Enables cross-domain analysis previously hindered by data incompatibility.
	Decision Support: Provides a more complete picture of reservoir characteristics.
	Knowledge Preservation: Standardizes institutional knowledge into a consistent format.

Conclusion
The “Reservoir Data Harmonizer” transforms the challenging process of integrating heterogeneous reservoir data into a streamlined, mathematically sound workflow. By implementing proven statistical normalization techniques and intelligent schema mapping, it enables petroleum engineers and geoscientists to focus on analysis and decision-making rather than data wrangling.

This application represents a significant step forward in reservoir data management, addressing a fundamental challenge that has historically consumed substantial time and resources in the Petroleum industry.

Version 2 Fixes:

1. Normalization Engine
	Fixed division by zero errors when the standard deviation is zero.
	Added error handling for empty datasets and missing fields.
	Improved robustness by providing default values when statistics can't be calculated.

2. Integration Results
	Fixed NaN values in the unified model by adding a safeGetNumber helper function.
	Added error handling to prevent crashes during transformation.
	Improved error reporting with try-catch blocks.

3. Data Preview
	Fixed rendering issues with empty datasets.
	Added handling for missing fields in the table view.
	Improved display of numeric values with proper formatting and NaN handling.

4. Data Upload
	Added input validation to prevent empty dataset names.
	Added duplicate name checking to prevent conflicts.
	Added error handling for the sample data generation process.

5. Main Page Component
	Added error state to display validation messages.
	Improved tab navigation with proper validation between steps.
	Added disabled states to prevent invalid workflow steps.

 New Utilities Added:
1. Data Validation Utility
	Added comprehensive dataset validation to check for:
	Missing values.
	Out-of-range values (statistical outliers).
	Duplicate records.
	Overall data quality assessment.

2. Data Cleanup Utility
	Added missing value imputation using median values (more robust than mean)
	Added deduplication functionality to remove redundant records
	Added a "Clean All Datasets" button to the UI

Edge Cases Handled:
	Empty datasets.
	Datasets with missing values.
	Division by zero in normalization.
	NaN values in calculations.
	Duplicate records.
	Invalid workflow transitions.

These improvements make the app more robust and user-friendly by preventing crashes, providing helpful error messages, and ensuring data quality throughout the normalization and integration process.
