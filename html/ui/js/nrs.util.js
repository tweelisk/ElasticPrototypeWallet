/******************************************************************************
 * Copyright © 2013-2016 The Nxt Core Developers.                             *
 *                                                                            *
 * See the AUTHORS.txt, DEVELOPER-AGREEMENT.txt and LICENSE.txt files at      *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Nxt software, including this file, may be copied, modified, propagated,    *
 * or distributed except according to the terms contained in the LICENSE.txt  *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

/**
 * @depends {nrs.js}
 */
var NRS = (function (NRS, $, undefined) {

    var LOCALE_DATA_DATE;
    var LOCALE_DATA_DECIMAL;
    var LOCALE_DATA_SEPARATOR;
    var LOCALE_DATA = {
        "ar-SA": {dateFormat: "dd/MM/yy", decimal: "٫", section: "٬"},
        "bg-BG": {dateFormat: "dd.M.yyyy", decimal: ",", section: " "},
        "ca-ES": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "zh-TW": {dateFormat: "yyyy/M/d", decimal: ".", section: ","},
        "cs-CZ": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "da-DK": {dateFormat: "dd-MM-yyyy", decimal: ",", section: "."},
        "de-DE": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "el-GR": {dateFormat: "d/M/yyyy", decimal: ",", section: "."},
        "en-US": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "fi-FI": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "fr-FR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "he-IL": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "hu-HU": {dateFormat: "yyyy. MM. dd.", decimal: ",", section: " "},
        "is-IS": {dateFormat: "d.M.yyyy", decimal: ".", section: ","},
        "it-IT": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ja-JP": {dateFormat: "yyyy/MM/dd", decimal: ".", section: ","},
        "ko-KR": {dateFormat: "yyyy-MM-dd", decimal: ".", section: ","},
        "nl-NL": {dateFormat: "d-M-yyyy", decimal: ",", section: "."},
        "nb-NO": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "pl-PL": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "pt-BR": {dateFormat: "d/M/yyyy", decimal: ",", section: "."},
        "ro-RO": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "ru-RU": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "hr-HR": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "sk-SK": {dateFormat: "d. M. yyyy", decimal: ",", section: " "},
        "sq-AL": {dateFormat: "yyyy-MM-dd", decimal: ".", section: ","},
        "sv-SE": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "th-TH": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "tr-TR": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "ur-PK": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "id-ID": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "uk-UA": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "be-BY": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "sl-SI": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "et-EE": {dateFormat: "d.MM.yyyy", decimal: ",", section: " "},
        "lv-LV": {dateFormat: "yyyy.MM.dd.", decimal: ",", section: " "},
        "lt-LT": {dateFormat: "yyyy.MM.dd", decimal: ",", section: " "},
        "fa-IR": {dateFormat: "MM/dd/yyyy", decimal: "٫", section: "٬"},
        "vi-VN": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "hy-AM": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "az-Latn-AZ": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "eu-ES": {dateFormat: "yyyy/MM/dd", decimal: ".", section: ","},
        "mk-MK": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "af-ZA": {dateFormat: "yyyy/MM/dd", decimal: ".", section: ","},
        "ka-GE": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "fo-FO": {dateFormat: "dd-MM-yyyy", decimal: ".", section: ","},
        "hi-IN": {dateFormat: "dd-MM-yyyy", decimal: ".", section: ","},
        "ms-MY": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "kk-KZ": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "ky-KG": {dateFormat: "dd.MM.yy", decimal: ".", section: ","},
        "sw-KE": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "uz-Latn-UZ": {dateFormat: "dd/MM yyyy", decimal: ".", section: ","},
        "tt-RU": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "pa-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "gu-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "ta-IN": {dateFormat: "dd-MM-yyyy", decimal: ".", section: ","},
        "te-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "kn-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "mr-IN": {dateFormat: "dd-MM-yyyy", decimal: ".", section: ","},
        "sa-IN": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "mn-MN": {dateFormat: "yy.MM.dd", decimal: ".", section: ","},
        "gl-ES": {dateFormat: "dd/MM/yy", decimal: ".", section: ","},
        "kok-IN": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "syr-SY": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "dv-MV": {dateFormat: "dd/MM/yy", decimal: ",", section: " "},
        "ar-IQ": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "zh-CN": {dateFormat: "yyyy/M/d", decimal: ".", section: ","},
        "de-CH": {dateFormat: "dd.MM.yyyy", decimal: ".", section: "'"},
        "en-GB": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-MX": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "fr-BE": {dateFormat: "d/MM/yyyy", decimal: ",", section: " "},
        "it-CH": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "nl-BE": {dateFormat: "d/MM/yyyy", decimal: ",", section: "."},
        "nn-NO": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "pt-PT": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "sr-Latn-CS": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "sv-FI": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "az-Cyrl-AZ": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "ms-BN": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "uz-Cyrl-UZ": {dateFormat: "dd.MM.yyyy", decimal: ".", section: ","},
        "ar-EG": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "zh-HK": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "de-AT": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "en-AU": {dateFormat: "d/MM/yyyy", decimal: ".", section: ","},
        "es-ES": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "fr-CA": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "sr-Cyrl-CS": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "ar-LY": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "zh-SG": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "de-LU": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "en-CA": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-GT": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "fr-CH": {dateFormat: "dd.MM.yyyy", decimal: ".", section: " "},
        "ar-DZ": {dateFormat: "dd-MM-yyyy", decimal: "٫", section: "٬"},
        "zh-MO": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "de-LI": {dateFormat: "dd.MM.yyyy", decimal: ",", section: "."},
        "en-NZ": {dateFormat: "d/MM/yyyy", decimal: ".", section: ","},
        "es-CR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "fr-LU": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "ar-MA": {dateFormat: "dd-MM-yyyy", decimal: "٫", section: "٬"},
        "en-IE": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-PA": {dateFormat: "MM/dd/yyyy", decimal: ",", section: "."},
        "fr-MC": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "ar-TN": {dateFormat: "dd-MM-yyyy", decimal: "٫", section: "٬"},
        "en-ZA": {dateFormat: "yyyy/MM/dd", decimal: ",", section: " "},
        "es-DO": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-OM": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-JM": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-VE": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-YE": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-029": {dateFormat: "MM/dd/yyyy", decimal: ".", section: ","},
        "es-CO": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-SY": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-BZ": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-PE": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-JO": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-TT": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "es-AR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-LB": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-ZW": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "es-EC": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-KW": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "en-PH": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "es-CL": {dateFormat: "dd-MM-yyyy", decimal: ",", section: "."},
        "ar-AE": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "es-UY": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-BH": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "es-PY": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "ar-QA": {dateFormat: "dd/MM/yyyy", decimal: "٫", section: "٬"},
        "es-BO": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "es-SV": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "es-HN": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "es-NI": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "es-PR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: "."},
        "am-ET": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "tzm-Latn-DZ": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "iu-Latn-CA": {dateFormat: "d/MM/yyyy", decimal: ",", section: " "},
        "sma-NO": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "mn-Mong-CN": {dateFormat: "yyyy/M/d", decimal: ".", section: ","},
        "gd-GB": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "en-MY": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "prs-AF": {dateFormat: "dd/MM/yy", decimal: ",", section: " "},
        "bn-BD": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "wo-SN": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "rw-RW": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "qut-GT": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "sah-RU": {dateFormat: "MM.dd.yyyy", decimal: ",", section: " "},
        "gsw-FR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "co-FR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "oc-FR": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "mi-NZ": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "ga-IE": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "se-SE": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "br-FR": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "smn-FI": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "moh-CA": {dateFormat: "M/d/yyyy", decimal: ",", section: " "},
        "arn-CL": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "ii-CN": {dateFormat: "yyyy/M/d", decimal: ",", section: " "},
        "dsb-DE": {dateFormat: "d. M. yyyy", decimal: ",", section: " "},
        "ig-NG": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "kl-GL": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "lb-LU": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "ba-RU": {dateFormat: "dd.MM.yy", decimal: ",", section: " "},
        "nso-ZA": {dateFormat: "yyyy/MM/dd", decimal: ",", section: " "},
        "quz-BO": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "yo-NG": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "ha-Latn-NG": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "fil-PH": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "ps-AF": {dateFormat: "dd/MM/yy", decimal: ".", section: ","},
        "fy-NL": {dateFormat: "d-M-yyyy", decimal: ",", section: " "},
        "ne-NP": {dateFormat: "M/d/yyyy", decimal: ".", section: ","},
        "se-NO": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "iu-Cans-CA": {dateFormat: "d/M/yyyy", decimal: ",", section: " "},
        "sr-Latn-RS": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "si-LK": {dateFormat: "yyyy-MM-dd", decimal: ".", section: ","},
        "sr-Cyrl-RS": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "lo-LA": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "km-KH": {dateFormat: "yyyy-MM-dd", decimal: ".", section: ","},
        "cy-GB": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "bo-CN": {dateFormat: "yyyy/M/d", decimal: ",", section: " "},
        "sms-FI": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "as-IN": {dateFormat: "dd-MM-yyyy", decimal: ",", section: " "},
        "ml-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "en-IN": {dateFormat: "dd-MM-yyyy", decimal: ".", section: ","},
        "or-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "bn-IN": {dateFormat: "dd-MM-yy", decimal: ".", section: ","},
        "tk-TM": {dateFormat: "dd.MM.yy", decimal: ",", section: " "},
        "bs-Latn-BA": {dateFormat: "d.M.yyyy", decimal: ".", section: ","},
        "mt-MT": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "sr-Cyrl-ME": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "se-FI": {dateFormat: "d.M.yyyy", decimal: ",", section: " "},
        "zu-ZA": {dateFormat: "yyyy/MM/dd", decimal: ".", section: ","},
        "xh-ZA": {dateFormat: "yyyy/MM/dd", decimal: ",", section: " "},
        "tn-ZA": {dateFormat: "yyyy/MM/dd", decimal: ",", section: " "},
        "hsb-DE": {dateFormat: "d. M. yyyy", decimal: ",", section: " "},
        "bs-Cyrl-BA": {dateFormat: "d.M.yyyy", decimal: ".", section: ","},
        "tg-Cyrl-TJ": {dateFormat: "dd.MM.yy", decimal: ".", section: ","},
        "sr-Latn-BA": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "smj-NO": {dateFormat: "dd.MM.yyyy", decimal: ",", section: " "},
        "rm-CH": {dateFormat: "dd/MM/yyyy", decimal: ".", section: ","},
        "smj-SE": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "quz-EC": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "quz-PE": {dateFormat: "dd/MM/yyyy", decimal: ",", section: " "},
        "hr-BA": {dateFormat: "d.M.yyyy.", decimal: ",", section: "."},
        "sr-Latn-ME": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "sma-SE": {dateFormat: "yyyy-MM-dd", decimal: ",", section: " "},
        "en-SG": {dateFormat: "d/M/yyyy", decimal: ".", section: ","},
        "ug-CN": {dateFormat: "yyyy-M-d", decimal: ",", section: " "},
        "sr-Cyrl-BA": {dateFormat: "d.M.yyyy", decimal: ",", section: "."},
        "es-US": {dateFormat: "M/d/yyyy", decimal: ".", section: ","}
    };

    NRS.getLocale = function () {
        var lang = window.javaFxLanguage || window.navigator.userLanguage || window.navigator.language;
        if (lang.length == 2) {
            lang = lang + "-" + lang.toUpperCase();
        }
        if (LOCALE_DATA[lang]) {
            LOCALE_DATA_DATE = LOCALE_DATA[lang].dateFormat;
            LOCALE_DATA_DECIMAL = LOCALE_DATA[lang].decimal;
            LOCALE_DATA_SEPARATOR = LOCALE_DATA[lang].section;
        } else {
            LOCALE_DATA_DATE = "dd/MM/yyyy";
            LOCALE_DATA_DECIMAL = ".";
            LOCALE_DATA_SEPARATOR = "'";
        }
    }

    NRS.formatVolume = function (volume) {
		var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
		if (volume == 0) return '0 B';
		var i = parseInt(Math.floor(Math.log(volume) / Math.log(1024)));

        volume = Math.round(volume / Math.pow(1024, i));
		var size = sizes[i];

        var digits = [], formattedVolume = "";
		do {
			digits[digits.length] = volume % 10;
			volume = Math.floor(volume / 10);
		} while (volume > 0);
		for (i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedVolume = "'" + formattedVolume;
			}
			formattedVolume = digits[i] + formattedVolume;
		}
		return formattedVolume + " " + size;
	};

    NRS.formatWeight = function (weight) {
		var digits = [],
			formattedWeight = "",
			i;
		do {
			digits[digits.length] = weight % 10;
			weight = Math.floor(weight / 10);
		} while (weight > 0);
		for (i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedWeight = "'" + formattedWeight;
			}
			formattedWeight = digits[i] + formattedWeight;
		}
		return formattedWeight.escapeHTML();
	};

    NRS.formatOrderPricePerWholeQNT = function (price, decimals) {
		price = NRS.calculateOrderPricePerWholeQNT(price, decimals, true);

		return NRS.format(price);
	};

    NRS.calculateOrderPricePerWholeQNT = function (price, decimals, returnAsObject) {
		if (typeof price != "object") {
			price = new BigInteger(String(price));
		}

		return NRS.convertToNXT(price.multiply(new BigInteger("" + Math.pow(10, decimals))), returnAsObject);
	};

    NRS.calculatePricePerWholeQNT = function (price, decimals) {
		price = String(price);

		if (decimals) {
			var toRemove = price.slice(-decimals);

			if (!/^[0]+$/.test(toRemove)) {
				//return new Big(price).div(new Big(Math.pow(10, decimals))).round(8, 0);
				throw $.t("error_invalid_input");
			} else {
				return price.slice(0, -decimals);
			}
		} else {
			return price;
		}
	};

    function calculateOrderTotalImpl(quantityQNT, priceNQT) {
        if (typeof quantityQNT != "object") {
            quantityQNT = new BigInteger(String(quantityQNT));
        }
        if (typeof priceNQT != "object") {
            priceNQT = new BigInteger(String(priceNQT));
        }
        return quantityQNT.multiply(priceNQT);
    }

    NRS.calculateOrderTotalNQT = function (quantityQNT, priceNQT) {
        return calculateOrderTotalImpl(quantityQNT, priceNQT).toString();
    };

    NRS.calculateOrderTotal = function (quantityQNT, priceNQT) {
        return NRS.convertToNXT(calculateOrderTotalImpl(quantityQNT, priceNQT));
    };

    NRS.calculatePercentage = function (a, b, rounding_mode) {
		if (String(b) == "0") {
            return "0";
        }
        if (rounding_mode != undefined) { // Rounding mode from Big.js
			Big.RM = rounding_mode;
		}
		a = new Big(String(a));
		b = new Big(String(b));

		var result = a.div(b).times(new Big("100")).toFixed(2);
		Big.RM = 1;

		return result.toString();
	};

    NRS.convertToNXT = function (amount, returnAsObject) {
        var negative = "";
        var mantissa = "";

		if (typeof amount != "object") {
			amount = new BigInteger(String(amount));
		}

        if (amount.compareTo(BigInteger.ZERO) < 0) {
            amount = amount.abs();
            negative = "-";
        }

        var fractionalPart = amount.mod(new BigInteger("100000000")).toString();
        amount = amount.divide(new BigInteger("100000000"));

        if (fractionalPart && fractionalPart != "0") {
            mantissa = ".";

            for (var i = fractionalPart.length; i < 8; i++) {
                mantissa += "0";
            }

            mantissa += fractionalPart.replace(/0+$/, "");
        }

		amount = amount.toString();

        if (returnAsObject) {
            return {
                "negative": negative,
                "amount": amount,
                "mantissa": mantissa
            };
        } else {
            return negative + amount + mantissa;
        }
    };

    NRS.amountToPrecision = function (amount, decimals) {
		amount = String(amount);

		var parts = amount.split(".");

		//no fractional part
		if (parts.length == 1) {
			return parts[0];
		} else if (parts.length == 2) {
			var fraction = parts[1];
			fraction = fraction.replace(/0+$/, "");

			if (fraction.length > decimals) {
				fraction = fraction.substring(0, decimals);
			}

			return parts[0] + "." + fraction;
		} else {
			throw $.t("error_invalid_input");
		}
	};

    NRS.convertToNQT = function (currency) {
		currency = String(currency);

		var parts = currency.split(".");

		var amount = parts[0];

		//no fractional part
        var fraction;
		if (parts.length == 1) {
            fraction = "00000000";
		} else if (parts.length == 2) {
			if (parts[1].length <= 8) {
                fraction = parts[1];
			} else {
                fraction = parts[1].substring(0, 8);
			}
		} else {
			throw $.t("error_invalid_input");
		}

		for (var i = fraction.length; i < 8; i++) {
			fraction += "0";
		}

		var result = amount + "" + fraction;

		//in case there's a comma or something else in there.. at this point there should only be numbers
		if (!/^\d+$/.test(result)) {
			throw $.t("error_invalid_input");
		}

		//remove leading zeroes
		result = result.replace(/^0+/, "");

		if (result === "") {
			result = "0";
		}

		return result;
	};

    NRS.convertToQNTf = function (quantity, decimals, returnAsObject) {
		quantity = String(quantity);

		if (quantity.length < decimals) {
			for (var i = quantity.length; i < decimals; i++) {
				quantity = "0" + quantity;
			}
		}

        var mantissa = "";

        if (decimals) {
            mantissa = "." + quantity.substring(quantity.length - decimals);
            quantity = quantity.substring(0, quantity.length - decimals);

			if (!quantity) {
				quantity = "0";
			}

            mantissa = mantissa.replace(/0+$/, "");

            if (mantissa == ".") {
                mantissa = "";
            }
        }

        if (returnAsObject) {
            return {
                "amount": quantity,
                "mantissa": mantissa
            };
        } else {
            return quantity + mantissa;
        }
    };

    NRS.convertToQNT = function (quantity, decimals) {
		quantity = String(quantity);

		var parts = quantity.split(".");

		var qnt = parts[0];

		//no fractional part
        var i;
		if (parts.length == 1) {
			if (decimals) {
                for (i = 0; i < decimals; i++) {
					qnt += "0";
				}
			}
		} else if (parts.length == 2) {
			var fraction = parts[1];
			if (fraction.length > decimals) {
				throw $.t("error_fraction_decimals", {
					"decimals": decimals
				});
			} else if (fraction.length < decimals) {
                for (i = fraction.length; i < decimals; i++) {
					fraction += "0";
				}
			}
			qnt += fraction;
		} else {
			throw $.t("error_invalid_input");
		}

		//in case there's a comma or something else in there.. at this point there should only be numbers
		if (!/^\d+$/.test(qnt)) {
			throw $.t("error_invalid_input_numbers");
		}
        try {
            if (parseInt(qnt) === 0) {
                return "0";
            }
        } catch (e) {
        }

		//remove leading zeroes
		return qnt.replace(/^0+/, "");
	};

    NRS.format = function (params, no_escaping) {
        var amount;
		if (typeof params != "object") {
            amount = String(params);
            var negative = amount.charAt(0) == "-" ? "-" : "";
            if (negative) {
                amount = amount.substring(1);
            }
            params = {
                "amount": amount,
                "negative": negative,
                "mantissa": ""
            };
        }

        amount = String(params.amount);

		var digits = amount.split("").reverse();
		var formattedAmount = "";
		var formattedMantissa = "";
        NRS.getLocale();
        formattedMantissa = params.mantissa.replace(".", LOCALE_DATA_DECIMAL);
		for (var i = 0; i < digits.length; i++) {
		    if (i > 0 && i % 3 == 0) {
                formattedAmount = LOCALE_DATA_SEPARATOR + formattedAmount;
            }
			formattedAmount = digits[i] + formattedAmount;
        }

        var output = (params.negative ? params.negative : "") + formattedAmount + formattedMantissa;

		if (!no_escaping) {
			output = output.escapeHTML();
		}

        return output;
	};

    NRS.formatQuantity = function (quantity, decimals, no_escaping) {
		return NRS.format(NRS.convertToQNTf(quantity, decimals, true), no_escaping);
	};

    NRS.formatAmount = function (amount, round, no_escaping) {
        if (typeof amount == "undefined") {
            return "0";
        } else if (typeof amount == "string") {
            amount = new BigInteger(amount);
        }

        var negative = "";
        var mantissa = "";

        if (typeof amount == "object") {
            var params = NRS.convertToNXT(amount, true);

            negative = params.negative;
            amount = params.amount;
            mantissa = params.mantissa;
        } else {
            //rounding only applies to non-nqt
            if (round) {
                amount = (Math.round(amount * 100) / 100);
            }

            if (amount < 0) {
                amount = Math.abs(amount);
                negative = "-";
            }

            amount = "" + amount;
            if (amount.indexOf(".") !== -1) {
                mantissa = amount.substr(amount.indexOf("."));
                amount = amount.replace(mantissa, "");
            } else {
                mantissa = "";
            }
        }

        return NRS.format({
            "negative": negative,
            "amount": amount,
            "mantissa": mantissa
        }, no_escaping);
    };

    NRS.fromEpochTime = function (epochTime) {
        if (!NRS.constants || NRS.constants.EPOCH_BEGINNING == 0) {
            throw "undefined epoch beginning";
        }
        return epochTime * 1000 + NRS.constants.EPOCH_BEGINNING - 500;
    };

    NRS.toEpochTime = function (currentTime) {
        if (currentTime == undefined) {
            currentTime = new Date();
        }
        if (NRS.constants.EPOCH_BEGINNING == 0) {
            throw "undefined epoch beginning";
        }
        return Math.floor((currentTime - NRS.constants.EPOCH_BEGINNING) / 1000);
    };

    NRS.formatTimestamp = function (timestamp, date_only, isAbsoluteTime) {
        if (!LOCALE_DATA_DATE) {
            NRS.getLocale();
            if (NRS.logConsole) {
                NRS.logConsole("Date Format Locale: " + lang + ", Date Format: " + LOCALE_DATA_DATE);
            }
        }
        var date;
		if (typeof timestamp == "object") {
            date = timestamp;
        } else if (isAbsoluteTime) {
            date = new Date(timestamp);
        } else {
            date = new Date(NRS.fromEpochTime(timestamp));
		}

		if (!isNaN(date) && typeof(date.getFullYear) == 'function') {
			var d = date.getDate();
			var dd = d < 10 ? '0' + d : d;
			var M = date.getMonth() + 1;
			var MM = M < 10 ? '0' + M : M;
			var yyyy = date.getFullYear();
            var yy = String(yyyy).substring(2);

            var res = LOCALE_DATA_DATE
                .replace(/dd/g, dd)
                .replace(/d/g, d)
                .replace(/MM/g, MM)
                .replace(/M/g, M)
                .replace(/yyyy/g, yyyy)
                .replace(/yy/g, yy);

            if (!date_only) {
                var hours = date.getHours();
                var originalHours = hours;
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();

                if (!NRS.settings || NRS.settings["24_hour_format"] == "0") {
                    if (originalHours == 0) {
                        hours += 12;
                    } else if (originalHours >= 13 && originalHours <= 23) {
                        hours -= 12;
                    }
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                res += " " + hours + ":" + minutes + ":" + seconds;

                if (!NRS.settings || NRS.settings["24_hour_format"] == "0") {
                    res += " " + (originalHours >= 12 ? "PM" : "AM");
				}
			}

			return res;
		} else {
			return date.toLocaleString();
		}
	};

    NRS.baseTargetPercent = function(block) {
        return Math.round(block.baseTarget / 153722867 * 100)
    };

    NRS.isPrivateIP = function (ip) {
		if (!/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
			return false;
		}
		var parts = ip.split('.');
      return parts[0] === '10' || parts[0] == '127' || parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31) || parts[0] === '192' && parts[1] === '168';
	};

    NRS.convertToHex16 = function (str) {
		var hex, i;
		var result = "";
		for (i = 0; i < str.length; i++) {
			hex = str.charCodeAt(i).toString(16);
			result += ("000" + hex).slice(-4);
		}

		return result;
	};

    NRS.convertFromHex16 = function (hex) {
		var j;
		var hexes = hex.match(/.{1,4}/g) || [];
		var back = "";
		for (j = 0; j < hexes.length; j++) {
			back += String.fromCharCode(parseInt(hexes[j], 16));
		}

		return back;
	};

    NRS.convertFromHex8 = function (hex) {
        var hexStr = hex.toString(); //force conversion
		var str = '';
        for (var i = 0; i < hexStr.length; i += 2) {
            str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
        }
		return str;
	};

    NRS.convertToHex8 = function (str) {
		var hex = '';
		for (var i = 0; i < str.length; i++) {
			hex += '' + str.charCodeAt(i).toString(16);
		}
		return hex;
	};

    NRS.getFormData = function ($form, unmodified) {
		var serialized = $form.serializeArray();
		var data = {};
        var multiValuedFields = ["phasingWhitelisted", "controlWhitelisted"];
		for (var s in serialized) {
            if (!serialized.hasOwnProperty(s)) {
                continue;
		}
			if (multiValuedFields.indexOf(serialized[s]["name"]) > -1) {
				if (serialized[s]['value'] != "") {
					if (serialized[s]['name'] in data) {
						var index = data[serialized[s]['name']].length;
						data[serialized[s]['name']][index] = serialized[s]['value'];
					} else {
						data[serialized[s]['name']] = [serialized[s]['value']]; //all data as list (traditional, to allow multiple values)
					}
				}
			} else {
				data[serialized[s]['name']] = serialized[s]['value'];
			}
		}
		if (!unmodified) {
			delete data.request_type;
			delete data.converted_account_id;
			delete data.merchant_info;
		}
		return data;
	};

    NRS.mergeMaps = function (mergedMap, toMap, skipAttributes) {
        for (var attr in mergedMap) {
            if (!mergedMap.hasOwnProperty(attr)) {
                continue;
            }
            if (skipAttributes[attr]) {
                continue;
            }
            toMap[attr] = mergedMap[attr];
        }
    };

    NRS.convertNumericToRSAccountFormat = function (account) {
		if (/^NXT\-/i.test(account)) {
			return String(account).escapeHTML();
		} else {
			var address = new NxtAddress();

			if (address.set(account)) {
				return address.toString().escapeHTML();
			} else {
				return "";
			}
		}
	};

    NRS.getAccountLink = function (object, accountKey, accountRef, title, showAccountRS, clazz) {
        var accountRS;
        if (typeof object[accountKey + "RS"] != "undefined") {
            accountRS = object[accountKey + "RS"];
        } else if (typeof object[accountKey] != "undefined") {
            accountRS = NRS.convertNumericToRSAccountFormat(object[accountKey]);
        } else {
            return '/';
        }
        var accountTitle;
        if (accountRef && accountRS == accountRef) {
            accountTitle = $.t(title);
        } else if(showAccountRS) {
            accountTitle = String(accountRS).escapeHTML();
        } else {
            accountTitle = NRS.getAccountTitle(object, accountKey);
        }
        if (!clazz) {
            clazz = "";
        } else {
            if (clazz.length > 0) {
                if (String(clazz).indexOf(" ") != 0) {
                    clazz = " " + clazz;
                }
            }
        }
        return "<a href='#' data-user='" + String(accountRS).escapeHTML() +
            "' class='show_account_modal_action user-info" + clazz + "'>" + accountTitle + "</a>";
    };

    NRS.getTransactionLink = function(id, text, isEscapedText) {
        if (!text) {
            text = id;
        }
        return "<a href='#' class='show_transaction_modal_action' data-transaction='" + String(id).escapeHTML() + "'>"
            + (isEscapedText ? text : String(text).escapeHTML()) + "</a>";
    };

    NRS.getBlockLink = function(height, text, isEscapedText) {
        if (!text) {
            text = height;
        }
        return "<a href='#' class='show_block_modal_action' data-block='" + String(height).escapeHTML() + "'>"
            + (isEscapedText ? text : String(text).escapeHTML()) + "</a>";
    };

    NRS.setBackLink = function() {
        var backLink = $(".back-link");
        if (NRS.modalStack.length > 0) {
            var backModalInfo = NRS.modalStack[NRS.modalStack.length - 1];
            backLink.removeClass("show_transaction_modal_action show_account_modal_action show_block_modal_action show_ledger_modal_action");
            backLink.addClass(backModalInfo.class);
            backLink.data(backModalInfo.key, backModalInfo.value);
            backLink.data("back", "true");
            backLink.show();
        } else {
            backLink.hide();
        }
    };

    NRS.getAccountTitle = function (object, acc) {
        var type = typeof object;

        var formattedAcc = "";

        if (type == "string" || type == "number") {
            formattedAcc = object;
            object = null;
        } else {
            if (object == null || typeof object[acc + "RS"] == "undefined") {
                return "/";
            } else {
                formattedAcc = String(object[acc + "RS"]).escapeHTML();
            }
        }

        if (formattedAcc == NRS.account || formattedAcc == NRS.accountRS) {
            return $.t("you");
        } else if (formattedAcc == NRS.constants.GENESIS || formattedAcc == NRS.constants.GENESIS_RS) {
            return $.t("genesis");
        } else if (formattedAcc in NRS.contacts) {
            return NRS.contacts[formattedAcc].name.escapeHTML();
        } else {
            return String(formattedAcc).escapeHTML();
        }
    };

    NRS.getAccountFormatted = function (object, acc) {
		var type = typeof object;

		if (type == "string" || type == "number") {
			return String(object).escapeHTML();
		} else {
			if (typeof object[acc + "RS"] == "undefined") {
				return "";
			} else {
				return String(object[acc + "RS"]).escapeHTML();
			}
		}
	};

    NRS.dataLoaded = function (data, noPageLoad) {
		var $el = $("#" + NRS.currentPage + "_contents");

		if ($el.length) {
			$el.empty().append(data);
		} else {
			$el = $("#" + NRS.currentPage + "_table");
			$el.find("tbody").empty().append(data);
            $el.find('[data-toggle="tooltip"]').tooltip();
		}

		NRS.dataLoadFinished($el);

		if (!noPageLoad) {
			NRS.pageLoaded();
		}
	};

    NRS.dataLoadFinished = function ($el, fadeIn) {
		var $parent = $el.parent();

		if (fadeIn) {
			$parent.hide();
		}

		$parent.removeClass("data-loading");

		var extra = $parent.data("extra");

		var empty = false;

		if ($el.is("table")) {
			if ($el.find("tbody tr").length > 0) {
				$parent.removeClass("data-empty");
				if ($parent.data("no-padding")) {
					$parent.parent().addClass("no-padding");
				}

				if (extra) {
					$(extra).show();
				}
			} else {
				empty = true;
			}
		} else {
			if ($.trim($el.html()).length == 0) {
				empty = true;
			}
		}

		if (empty) {
			$parent.addClass("data-empty");
			if ($parent.data("no-padding")) {
				$parent.parent().removeClass("no-padding");
			}
			if (extra) {
				$(extra).hide();
			}
		} else {
			$parent.removeClass("data-empty");
		}

		if (fadeIn) {
            $parent.stop(true, true).fadeIn(400, function () {
				$parent.show();
			});
		}
	};

    NRS.createInfoTable = function (data, fixed) {
		var rows = "";
		for (var key in data) {
            if (!data.hasOwnProperty(key)) {
                continue;
            }
			var value = data[key];

			var match = key.match(/(.*)(NQT|QNT|RS)$/);
			var type = "";

			if (match && match[1]) {
				key = match[1];
				type = match[2];
			}

            key = key.replace(/\s+/g, "").replace(/([A-Z])/g, function ($1) {
                return "_" + $1.toLowerCase();
            });

            //no need to mess with input, already done if Formatted is at end of key
            if (/_formatted_html$/i.test(key)) {
                key = key.replace("_formatted_html", "");
                value = String(value);
            } else if (/_formatted$/i.test(key)) {
                key = key.replace("_formatted", "");
                value = String(value).escapeHTML();
            } else if ((key == "quantity" || key == "units" || key == "initial_buy_supply" || key == "initial_sell_supply" ||
                key == "total_buy_limit" || key == "total_sell_limit" || key == "units_exchanged" || key == "total_exchanged" ||
                key == "initial_units" || key == "reserve_units" || key == "max_units" || key == "quantity_traded" || key == "initial_quantity") && $.isArray(value)) {
                if ($.isArray(value)) {
                    value = NRS.formatQuantity(value[0], value[1]);
                } else {
                    value = NRS.formatQuantity(value, 0);
                }
            } else if (key == "price" || key == "total" || key == "amount" || key == "fee" || key == "refund" || key == "discount") {
                value = NRS.formatAmount(new BigInteger(String(value))) + " NXT";
            } else if (key == "sender" || key == "recipient" || key == "account" || key == "seller" || key == "buyer" || key == "lessee") {
                value = "<a href='#' data-user='" + String(value).escapeHTML() + "' class='show_account_modal_action'>" + NRS.getAccountTitle(value) + "</a>";
            } else if (key == "request_processing_time") { /* Skip from displaying request processing time */
                continue;
            } else {
                value = String(value).escapeHTML().nl2br();
            }

            rows += "<tr><td style='font-weight:bold" + (fixed ? ";width:150px" : "") + "'>" + $.t(key).escapeHTML() + (type ? " " + type.escapeHTML() : "") + ":</td><td style='width:90%;word-break:break-all'>" + value + "</td></tr>";
        }

        return rows;
    };

    NRS.getSelectedText = function () {
		var t = "";
		if (window.getSelection) {
			t = window.getSelection().toString();
		} else if (document.getSelection) {
			t = document.getSelection().toString();
		} else if (document.selection) {
			t = document.selection.createRange().text;
		}
		return t;
	};

    NRS.formatStyledAmount = function (strAmount, round) {
        NRS.getLocale();
        var amount = NRS.formatAmount(strAmount, round).split(LOCALE_DATA_DECIMAL);
		if (amount.length == 2) {
            return amount[0] + "<span style='font-size:12px'>" + LOCALE_DATA_DECIMAL + amount[1] + "</span>";
		} else {
            return amount[0];
		}
	};

    NRS.getUnconfirmedTransactionsFromCache = function (type, subtype, fields, single) {
		if (!NRS.unconfirmedTransactions.length) {
			return false;
		}

		if (typeof type == "number") {
			type = [type];
		}

		if (typeof subtype == "number") {
			subtype = [subtype];
		}

		var unconfirmedTransactions = [];

		for (var i = 0; i < NRS.unconfirmedTransactions.length; i++) {
			var unconfirmedTransaction = NRS.unconfirmedTransactions[i];

			if (type.indexOf(unconfirmedTransaction.type) == -1 || (subtype.length > 0 && subtype.indexOf(unconfirmedTransaction.subtype) == -1)) {
				continue;
			}

			if (fields) {
				for (var key in fields) {
                    if (!fields.hasOwnProperty(key)) {
                        continue;
                    }
					if (unconfirmedTransaction[key] == fields[key]) {
						if (single) {
							return NRS.completeUnconfirmedTransactionDetails(unconfirmedTransaction);
						} else {
							unconfirmedTransactions.push(unconfirmedTransaction);
						}
					}
				}
			} else {
				if (single) {
					return NRS.completeUnconfirmedTransactionDetails(unconfirmedTransaction);
				} else {
					unconfirmedTransactions.push(unconfirmedTransaction);
				}
			}
		}

		if (single || unconfirmedTransactions.length == 0) {
			return false;
		} else {
            $.each(unconfirmedTransactions, function (key, val) {
				unconfirmedTransactions[key] = NRS.completeUnconfirmedTransactionDetails(val);
			});

			return unconfirmedTransactions;
		}
	};

    NRS.completeUnconfirmedTransactionDetails = function (unconfirmedTransaction) {
		if (unconfirmedTransaction.type == 3 && unconfirmedTransaction.subtype == 4 && !unconfirmedTransaction.name) {
			NRS.sendRequest("getDGSGood", {
				"goods": unconfirmedTransaction.attachment.goods
            }, function (response) {
				unconfirmedTransaction.name = response.name;
				unconfirmedTransaction.buyer = unconfirmedTransaction.sender;
				unconfirmedTransaction.buyerRS = unconfirmedTransaction.senderRS;
				unconfirmedTransaction.seller = response.seller;
				unconfirmedTransaction.sellerRS = response.sellerRS;
			}, false);
		} else if (unconfirmedTransaction.type == 3 && unconfirmedTransaction.subtype == 0) {
			unconfirmedTransaction.goods = unconfirmedTransaction.transaction;
		}

		return unconfirmedTransaction;
	};

    NRS.hasTransactionUpdates = function (transactions) {
		return ((transactions && transactions.length) || NRS.unconfirmedTransactionsChange);
	};

    NRS.showMore = function ($el) {
		if (!$el) {
			$el = $("#" + NRS.currentPage + "_contents");
			if (!$el.length) {
				$el = $("#" + NRS.currentPage + "_table");
			}
		}
		var adjustheight = 40;
		var moreText = "Show more...";
		var lessText = "Show less...";

        $el.find(".showmore > .moreblock").each(function () {
			if ($(this).height() > adjustheight) {
				$(this).css("height", adjustheight).css("overflow", "hidden");
				$(this).parent(".showmore").append(' <a href="#" class="adjust"></a>');
                $(this).parent(".showmore").find("a.adjust").text(moreText).click(function (e) {
					e.preventDefault();

					if ($(this).text() == moreText) {
						$(this).parents("div:first").find(".moreblock").css('height', 'auto').css('overflow', 'visible');
						$(this).parents("div:first").find("p.continued").css('display', 'none');
						$(this).text(lessText);
					} else {
						$(this).parents("div:first").find(".moreblock").css('height', adjustheight).css('overflow', 'hidden');
						$(this).parents("div:first").find("p.continued").css('display', 'block');
						$(this).text(moreText);
					}
				});
			}
		});
	};

    NRS.showFullDescription = function ($el) {
		$el.addClass("open").removeClass("closed");
		$el.find(".description_toggle").text("Less...");
	};

    NRS.showPartialDescription = function ($el) {
		if ($el.hasClass("open") || $el.height() > 40) {
			$el.addClass("closed").removeClass("open");
			$el.find(".description_toggle").text("More...");
		} else {
			$el.find(".description_toggle").text("");
		}
	};

    $("body").on(".description_toggle", "click", function (e) {
		e.preventDefault();

		if ($(this).closest(".description").hasClass("open")) {
			NRS.showPartialDescription();
		} else {
			NRS.showFullDescription();
		}
	});

    $("#offcanvas_toggle").on("click", function (e) {
		e.preventDefault();

		//If window is small enough, enable sidebar push menu
        var leftSide = $(".left-side");
        var rightSide = $(".right-side");
		if ($(window).width() <= 992) {
            var rowOffCanvas = $('.row-offcanvas');
            rowOffCanvas.toggleClass('active');
            leftSide.removeClass("collapse-left");
            rightSide.removeClass("strech");
            rowOffCanvas.toggleClass("relative");
		} else {
			//Else, enable content streching
            leftSide.toggleClass("collapse-left");
            rightSide.toggleClass("strech");
		}

        leftSide.one($.support.transition.end,
            function () {
			$(".content.content-stretch:visible").width($(".page:visible").width());
		});
	});

    $.fn.tree = function () {
        return this.each(function () {
			var btn = $(this).children("a").first();
			var menu = $(this).children(".treeview-menu").first();
			var isActive = $(this).hasClass('active');

			//initialize already active menus
			if (isActive) {
				menu.show();
				btn.children(".fa-angle-right").first().removeClass("fa-angle-right").addClass("fa-angle-down");
			}
			//Slide open or close the menu on link click
            btn.click(function (e) {
				e.preventDefault();
				if (isActive) {
					//Slide up to close menu
					menu.slideUp();
					isActive = false;
					btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-right");
					btn.parent("li").removeClass("active");
				} else {
					//Slide down to open menu
					menu.slideDown();
					isActive = true;
					btn.children(".fa-angle-right").first().removeClass("fa-angle-right").addClass("fa-angle-down");
					btn.parent("li").addClass("active");
				}
			});
		});
	};

    NRS.translateServerError = function (response) {
        var match;
		if (!response.errorDescription) {
			if (response.errorMessage) {
				response.errorDescription = response.errorMessage;
			} else if (response.error) {
				if (typeof response.error == "string") {
					response.errorDescription = response.error;
					response.errorCode = -1;
				} else {
					return $.t("error_unknown");
				}
			} else {
				return $.t("error_unknown");
			}
		}

		switch (response.errorCode) {
			case -1:
				switch (response.errorDescription) {
					case "Invalid ordinary payment":
						return $.t("error_invalid_ordinary_payment");
						break;
					case "Missing alias name":
						return $.t("error_missing_alias_name");
						break;
					case "Transferring aliases to Genesis account not allowed":
						return $.t("error_alias_transfer_genesis");
						break;
					case "Ask order already filled":
						return $.t("error_ask_order_filled");
						break;
					case "Bid order already filled":
						return $.t("error_bid_order_filled");
						break;
					case "Only text encrypted messages allowed":
						return $.t("error_encrypted_text_messages_only");
						break;
					case "Missing feedback message":
						return $.t("error_missing_feedback_message");
						break;
					case "Only text public messages allowed":
						return $.t("error_public_text_messages_only");
						break;
					case "Purchase does not exist yet or not yet delivered":
						return $.t("error_purchase_delivery");
						break;
					case "Purchase does not exist or is not delivered or is already refunded":
						return $.t("error_purchase_refund");
						break;
					case "Recipient account does not have a public key, must attach a public key announcement":
						return $.t("error_recipient_no_public_key_announcement");
						break;
					case "Transaction is not signed yet":
						return $.t("error_transaction_not_signed");
						break;
					case "Transaction already signed":
						return $.t("error_transaction_already_signed");
						break;
					case "PublicKeyAnnouncement cannot be attached to transactions with no recipient":
						return $.t("error_public_key_announcement_no_recipient");
						break;
					case "Announced public key does not match recipient accountId":
						return $.t("error_public_key_different_account_id");
						break;
					case "Public key for this account has already been announced":
						return $.t("error_public_key_already_announced");
						break;
					default:
						if (response.errorDescription.indexOf("Alias already owned by another account") != -1) {
							return $.t("error_alias_owned_by_other_account");
						} else if (response.errorDescription.indexOf("Invalid alias sell price") != -1) {
							return $.t("error_invalid_alias_sell_price");
						} else if (response.errorDescription.indexOf("Alias hasn't been registered yet") != -1) {
							return $.t("error_alias_not_yet_registered");
						} else if (response.errorDescription.indexOf("Alias doesn't belong to sender") != -1) {
							return $.t("error_alias_not_from_sender");
						} else if (response.errorDescription.indexOf("Alias is owned by account other than recipient") != -1) {
							return $.t("error_alias_not_from_recipient");
						} else if (response.errorDescription.indexOf("Alias is not for sale") != -1) {
							return $.t("error_alias_not_for_sale");
						} else if (response.errorDescription.indexOf("Invalid alias name") != -1) {
							return $.t("error_invalid_alias_name");
						} else if (response.errorDescription.indexOf("Invalid URI length") != -1) {
							return $.t("error_invalid_alias_uri_length");
						} else if (response.errorDescription.indexOf("Invalid ask order") != -1) {
							return $.t("error_invalid_ask_order");
						} else if (response.errorDescription.indexOf("Invalid bid order") != -1) {
							return $.t("error_invalid_bid_order");
						} else if (response.errorDescription.indexOf("Goods price or quantity changed") != -1) {
							return $.t("error_dgs_price_quantity_changed");
						} else if (response.errorDescription.indexOf("Invalid digital goods price change") != -1) {
							return $.t("error_invalid_dgs_price_change");
						} else if (response.errorDescription.indexOf("Invalid digital goods refund") != -1) {
							return $.t("error_invalid_dgs_refund");
						} else if (response.errorDescription.indexOf("Purchase does not exist yet, or already delivered") != -1) {
							return $.t("error_purchase_not_exist_or_delivered");
						} else if (response.errorDescription.match(/Goods.*not yet listed or already delisted/)) {
							return $.t("error_dgs_not_listed");
						} else if (response.errorDescription.match(/Delivery deadline has already expired/)) {
							return $.t("error_dgs_delivery_deadline_expired");
						} else if (response.errorDescription.match(/Invalid effective balance leasing:.*recipient account.*not found or no public key published/)) {
							return $.t("error_invalid_balance_leasing_no_public_key");
						} else if (response.errorDescription.indexOf("Invalid effective balance leasing") != -1) {
							return $.t("error_invalid_balance_leasing");
						} else if (response.errorDescription.match(/Wrong buyer for.*expected:.*/)) {
							return $.t("error_wrong_buyer_for_alias");
						} else {
							return response.errorDescription;
						}

						break;
				}
			case 1:
				switch (response.errorDescription) {
					case "This request is only accepted using POST!":
						return $.t("error_post_only");
						break;
					case "Incorrect request":
						return $.t("error_incorrect_request");
						break;
					default:
						return response.errorDescription;
						break;
				}
				break;
			case 2:
				return response.errorDescription;
				break;
			case 3:
                match = response.errorDescription.match(/"([^"]+)" not specified/i);
				if (match && match[1]) {
					return $.t("error_not_specified", {
						"name": NRS.getTranslatedFieldName(match[1]).toLowerCase()
					}).capitalize();
				}

                match = response.errorDescription.match(/At least one of \[(.*)\] must be specified/i);
                if (match && match[1]) {
                    var fieldNames = match[1].split(",");
                    var translatedFieldNames = [];
                    for (var i=0; i<fieldNames.length; i++) {
                        translatedFieldNames.push(NRS.getTranslatedFieldName(fieldNames[i].toLowerCase()));
                    }

                    var translatedFieldNamesJoined = translatedFieldNames.join(", ");

                    return $.t("error_not_specified", {
                        "names": translatedFieldNamesJoined,
                        "count": translatedFieldNames.length
                    }).capitalize();
                } else {
                    return response.errorDescription;
                }
                break;
            case 4:
                match = response.errorDescription.match(/Incorrect "(.*)"(.*)/i);
				if (match && match[1] && match[2]) {
                    return $.t("error_incorrect_name", {
						"name": NRS.getTranslatedFieldName(match[1]).toLowerCase(),
                        "reason": match[2]
					}).capitalize();
				} else {
					return response.errorDescription;
				}
				break;
			case 5:
                match = response.errorDescription.match(/Unknown (.*)/i);
				if (match && match[1]) {
					return $.t("error_unknown_name", {
						"name": NRS.getTranslatedFieldName(match[1]).toLowerCase()
					}).capitalize();
				}

				if (response.errorDescription == "Account is not forging") {
					return $.t("error_not_forging");
				} else {
					return response.errorDescription;
				}
				break;
			case 6:
				switch (response.errorDescription) {
					case "Not enough assets":
						return $.t("error_not_enough_assets");
						break;
					case "Not enough funds":
						return $.t("error_not_enough_funds");
						break;
					default:
						return response.errorDescription;
						break;
				}
				break;
			case 7:
				if (response.errorDescription == "Not allowed") {
					return $.t("error_not_allowed");
				} else {
					return response.errorDescription;
				}
				break;
			case 8:
				switch (response.errorDescription) {
					case "Goods have not been delivered yet":
						return $.t("error_goods_not_delivered_yet");
						break;
					case "Feedback already sent":
						return $.t("error_feedback_already_sent");
						break;
					case "Refund already sent":
						return $.t("error_refund_already_sent");
						break;
					case "Purchase already delivered":
						return $.t("error_purchase_already_delivered");
						break;
					case "Decryption failed":
						return $.t("error_decryption_failed");
						break;
					case "No attached message found":
						return $.t("error_no_attached_message");
					case "recipient account does not have public key":
						return $.t("error_recipient_no_public_key");
					default:
						return response.errorDescription;
						break;
				}
				break;
			case 9:
				if (response.errorDescription == "Feature not available") {
					return $.t("error_feature_not_available");
				} else {
					return response.errorDescription;
				}
				break;
			default:
				return response.errorDescription;
				break;
		}
	};

    NRS.getTranslatedFieldName = function (name) {
        var nameKey = String(name).replace(/NQT|QNT|RS$/, "").replace(/\s+/g, "").replace(/([A-Z])/g, function ($1) {
			return "_" + $1.toLowerCase();
		});

		if (nameKey.charAt(0) == "_") {
			nameKey = nameKey.substring(1);
		}

		if ($.i18n.exists(nameKey)) {
			return $.t(nameKey).escapeHTML();
		} else {
			return nameKey.replace(/_/g, " ").escapeHTML();
		}
	};

    NRS.isControlKey = function (charCode) {
        return !(charCode >= 32 || charCode == 10 || charCode == 13);
    };

    NRS.validateDecimals = function (maxFractionLength, charCode, val, e) {
        if (maxFractionLength) {
            //allow 1 single period character
            if (charCode == 110 || charCode == 190) {
                if (val.indexOf(".") != -1) {
                    e.preventDefault();
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            //do not allow period
            if (charCode == 110 || charCode == 190 || charCode == 188) {
                $.growl($.t("error_fractions"), {
                    "type": "danger"
                });
                e.preventDefault();
                return false;
            }
        }
        if (charCode >= 96 && charCode <= 105) {
            // convert numeric keyboard code to normal ascii otherwise String.fromCharCode()
            // returns the wrong value
            charCode = charCode + 48 - 96;
        }
        var input = val + String.fromCharCode(charCode);

        var mantissa = input.match(/\.(\d*)$/);

        //only allow as many as there are decimals allowed..
        if (mantissa && mantissa[1].length > maxFractionLength) {
            var selectedText = NRS.getSelectedText();

            if (selectedText != val) {
                var errorMessage = $.t("error_decimals", {
                    "count": maxFractionLength
                });
                $.growl(errorMessage, {
                    "type": "danger"
                });

                e.preventDefault();
                return false;
            }
        }

        //numeric characters, left/right key, backspace, delete
        if (charCode == 8 || charCode == 37 || charCode == 39 || charCode == 46 || (charCode >= 48 && charCode <= 57 && !isNaN(String.fromCharCode(charCode)))) {
            return true;
        } else {
            //comma
            if (charCode == 188) {
                $.growl($.t("error_comma_not_allowed"), {
                    "type": "danger"
                });
            }
            e.preventDefault();
            return false;
        }
    };

    NRS.getUrlParameter = function (param) {
		var url = window.location.search.substring(1);
		var urlParams = url.split('&');
        for (var i = 0; i < urlParams.length; i++) {
			var paramKeyValue = urlParams[i].split('=');
            if (paramKeyValue.length != 2) {
                continue;
            }
            if (paramKeyValue[0] == param) {
				return paramKeyValue[1];
			}
		}
		return false;
    };

	// http://stackoverflow.com/questions/12518830/java-string-getbytesutf8-javascript-analog
    NRS.getUtf8Bytes = function (str) {
        //noinspection JSDeprecatedSymbols
        var utf8 = unescape(encodeURIComponent(str));
        var arr = [];
        for (var i = 0; i < utf8.length; i++) {
            arr[i] = utf8.charCodeAt(i);
        }
        return arr;
    };

    NRS.getTransactionStatusIcon = function (phasedEntity) {
        var statusIcon;
        if (phasedEntity.expectedCancellation == true) {
            statusIcon = "<i class='fa fa-ban' title='" + $.t("cancelled") + "'></i>";
        } else if (phasedEntity.phased == true) {
            statusIcon = "<i class='fa fa-gavel' title='" + $.t("phased") + "'></i>";
        } else if (phasedEntity.phased == false) {
            statusIcon = "<i class='fa fa-circle-o' title='" + $.t("unconfirmed") + "'></i>";
        } else {
            statusIcon = "<i class='fa fa-circle' title='" + $.t("confirmed") + "'></i>";
        }
        return statusIcon;
    };

    NRS.phasingControlObjectToPhasingParams = function(controlObj) {
        var phasingParams = {};

        phasingParams.phasingVotingModel = controlObj.votingModel;
        phasingParams.phasingQuorum = controlObj.quorum;
        phasingParams.phasingMinBalance = controlObj.minBalance;
        phasingParams.phasingMinBalanceModel = controlObj.minBalanceModel;
        if (controlObj.holding) {
            phasingParams.phasingHolding = controlObj.holding;
        }
        if (controlObj.whitelist) {
            phasingParams.phasingWhitelisted = [];
            $.each(controlObj.whitelist, function(index, accObject) {
                phasingParams.phasingWhitelisted.push(accObject.whitelisted);
            });
        }
        return phasingParams;
    };

    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    NRS.strToUTF8Arr = function(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80) utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6),
                          0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12),
                          0x80 | ((charcode >> 6) & 0x3f),
                          0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                          | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18),
                          0x80 | ((charcode >> 12) & 0x3f),
                          0x80 | ((charcode >> 6) & 0x3f),
                          0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    };

    function byteArrayToBigInteger(byteArray) {
        var value = new BigInteger("0", 10);
        for (var i = byteArray.length - 1; i >= 0; i--) {
            value = value.multiply(new BigInteger("256", 10)).add(new BigInteger(byteArray[i].toString(10), 10));
        }
        return value;
    }

    NRS.initialCaps = function(str) {
        if (!str || str == "") {
            return str;
        }
        var firstChar = str.charAt(0).toUpperCase();
        if (str.length == 1) {
            return firstChar;
        }
        return firstChar + str.slice(1);
    };

    NRS.addEllipsis = function(str, length) {
        if (!str || str == "" || str.length <= length) {
            return str;
        }
        return str.substring(0, length) + "...";
    };

    NRS.generateToken = function(message, secretPhrase) {
        var messageBytes = NRS.getUtf8Bytes(message);
        var pubKeyBytes = converters.hexStringToByteArray(NRS.getPublicKey(converters.stringToHexString(secretPhrase)));
        var token = pubKeyBytes;

        var tsb = [];
        var ts = NRS.toEpochTime();
        tsb[0] = ts & 0xFF;
        tsb[1] = (ts >> 8) & 0xFF;
        tsb[2] = (ts >> 16) & 0xFF;
        tsb[3] = (ts >> 24) & 0xFF;

        messageBytes = messageBytes.concat(pubKeyBytes, tsb);
        token = token.concat(tsb, converters.hexStringToByteArray(
            NRS.signBytes(converters.byteArrayToHexString(messageBytes),
                secretPhrase !== undefined ? converters.stringToHexString(secretPhrase) : undefined)));

        var buf = "";
        for (var ptr = 0; ptr < 100; ptr += 5) {
            var nbr = [];
            nbr[0] = token[ptr] & 0xFF;
            nbr[1] = token[ptr+1] & 0xFF;
            nbr[2] = token[ptr+2] & 0xFF;
            nbr[3] = token[ptr+3] & 0xFF;
            nbr[4] = token[ptr+4] & 0xFF;
            var number = byteArrayToBigInteger(nbr);
            if (number < 32) {
                buf += "0000000";
            } else if (number < 1024) {
                buf += "000000";
            } else if (number < 32768) {
                buf += "00000";
            } else if (number < 1048576) {
                buf += "0000";
            } else if (number < 33554432) {
                buf += "000";
            } else if (number < 1073741824) {
                buf += "00";
            } else if (number < 34359738368) {
                buf += "0";
            }
            buf +=number.toString(32);
        }
        return buf;
    };

    NRS.versionCompare = function (v1, v2) {
        if (v2 == undefined) {
            return -1;
        } else if (v1 == undefined) {
            return -1;
        }

        //https://gist.github.com/TheDistantSea/8021359 (based on)
        var v1last = v1.slice(-1);
        var v2last = v2.slice(-1);

        if (v1last == 'e') {
            v1 = v1.substring(0, v1.length - 1);
        } else {
            v1last = '';
        }

        if (v2last == 'e') {
            v2 = v2.substring(0, v2.length - 1);
        } else {
            v2last = '';
        }

        var v1parts = v1.split('.');
        var v2parts = v2.split('.');

        function isValidPart(x) {
            return /^\d+$/.test(x);
        }

        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
            return NaN;
        }

        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);

        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                return 1;
            }
            if (v1parts[i] != v2parts[i]) {
                if (v1parts[i] > v2parts[i]) {
                    return 1;
                } else {
                    return -1;
                }
            }
        }

        if (v1parts.length != v2parts.length) {
            return -1;
        }

        if (v1last && v2last) {
            return 0;
        } else if (v1last) {
            return 1;
        } else if (v2last) {
            return -1;
        } else {
            return 0;
        }
    };

    return NRS;
}(NRS || {}, jQuery));