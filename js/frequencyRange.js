/**
 *  File name: frequencyRange.js
 *  
 *  Author: Vincent Zane Rodriguez
 *  
 *  Purpose: this script should take in the type 
 *  of frequency desired then output out put the 
 *  fourier transform bin indices
 */

/*
 * type: 
 * sub-bass 20-60
 * bass 60-250
 * low-mid 250-500
 * mid 500-2kHz
 * high-mid 2-4kHz
 * presence 4-6kHz
 * brilliance 6-20kHz
 * 
 * fft: defined in audio.fftSize
 * 
 * shift: variations in the frequencies
 * shiftLow: bottom percentage of frequency (int 0-100)
 * shiftHigh: upper percentage of frequency (int 0-100)
 * 
 * 
 */

// constant declarations for frequency ranges (in Hz)

// sub bass
var subBassLowEnd = 20;
var subBassHighEnd = 60;

// bass
var bassLowEnd = 60;
var bassHighEnd = 250;

// low-mid
var lowMidLowEnd = 250;
var lowMidHighEnd = 500;

//mid
var midLowEnd = 500;
var midHighEnd = 2000;

//high-mid
var highMidLowEnd = 2000;
var highMidHighEnd = 4000;

//presence
var presenceLowEnd = 4000;
var presenceHighEnd = 6000;

//brilliance
var brillianceLowEnd = 6000;
var brillianceHighEnd = 20000;



function getIndexRange(type, fft, shiftLow, shiftHigh ) {
	
	// this represent the indices which will be returned
	// these are intgers which represent buckets in the Fourier Transform
	var lowEnd = 0;
	var highEnd = 0;
	
	
	// sampleRate default is 44100
	var sampleRate = 44100;
	
	// determine bucketsize 
		// i.e. hertz range per index in the audio buffer
	
	var bucketSize = 44100 / fft;
	
	// determine the base first and last buckets that need to be analyzed. 
	
	switch (type)
	{
		case "sub-bass":
			lowEnd = Math.floor(subBassLowEnd / bucketSize);
			highEnd = Math.floor(subBassHighEnd / bucketSize);
			break;
			
		case "bass":
			lowEnd = Math.floor(bassLowEnd / bucketSize);
			highEnd = Math.floor(bassHighEnd / bucketSize);
			break;
			
		case "low-mid":
			lowEnd = Math.floor(lowMidLowEnd / bucketSize);
			highEnd = Math.floor(lowMidHighEnd / bucketSize);
			break;
			
		case "mid":
			lowEnd = Math.floor(midLowEnd / bucketSize);
			highEnd = Math.floor(midHighEnd / bucketSize);
			break;
			
		case "high-mid":
			lowEnd = Math.floor(highMidLowEnd / bucketSize);
			highEnd = Math.floor(highMidHighEnd / bucketSize);
			break;
			
		case "presence":
			lowEnd = Math.floor(presenceLowEnd / bucketSize);
			highEnd = Math.floor(presenceHighEnd / bucketSize);
			break;
			
		default: // "brilliance"
			lowEnd = Math.floor(brillianceLowEnd / bucketSize);
			highEnd = Math.floor(brillianceHighEnd / bucketSize);
			break;
	}
	
	
	
	// convert shiftLow and HighLow to decimal values
	shiftLow = shiftLow / 100;
	shiftHigh = shiftHigh / 100;
	
	// now shift over the low and high end to match your shiftLow and shiftHigh
	
	// first make sure shiftLow is smaller than shiftHigh
	if( shiftLow < shiftHigh)
	{
		// first get total range to determine how much the buckets will be moving by
		// i.e. a 30% increase in the sub bass low end is much smaller than a 30% in the brilliance low end 
		
		var range = highEnd - lowEnd;
		
		// shifting over lowend
		
		lowEnd += Math.floor(range * shiftLow);
		
		// shhifting over highend
		
		highEnd -= Math.floor(range * shiftHigh);
	}
	
	
	// return the low and high ends
	// accessed by [var].lowEnd or [var].highEnd
	return {
		lowEnd: lowEnd, highEnd: highEnd
	};


}


// will assign values to a face
function assignCubeValues(type, fft, faceSize) {
	
	// to be returned and used for the face's frequency ranges
	var buckets = [];
	
	var it = faceSize*faceSize;
	
	// what shifts should be used? 
	
	var normalFreq = getIndexRange(type, fft, 0, 0);
	
	var range = normalFreq.highEnd - normalFreq.lowEnd;
	
	var increment = Math.floor(range / faceSize);
	
	
	var lowChange = 100 - increment;
	var highChange = 0;
	
	// "middle" block
	var middle = Math.floor(it / 2); 
	
	// used for holding frequency ranges before pushing into buckets []
	var temp;
	
	for (i= 0 ; i < it ; i++)
	{
		if (i != middle )
		{
			temp = getIndexRange(type, fft, lowChange, highChange);
		}
		else
		{
			temp = normalFreq;
		}
		
		buckets.push(temp);
		
		lowChange -= increment;
		highChange -= increment;
		
	}
	
	
	
	return buckets;
	
	
}

function createTestFreqFour(fft)
{
	

	var result= [];
	
	result.push(getIndexRange("sub-bass", fft,0,0));
	result.push(getIndexRange("bass", fft,0,0));
	result.push(getIndexRange("sub-bass", fft,0,0));
	result.push(getIndexRange("low-mid", fft,0,0));
	result.push(getIndexRange("mid", fft,0,0));
	result.push(getIndexRange("high-mid", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	result.push(getIndexRange("brilliance", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	
	result.push(getIndexRange("mid", fft,0,0));
	result.push(getIndexRange("high-mid", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	result.push(getIndexRange("brilliance", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	
	return result;
	
}

function createTestFreq(fft)
{
	

	var result= [];
	
	result.push(getIndexRange("sub-bass", fft,0,0));
	result.push(getIndexRange("bass", fft,0,0));
	result.push(getIndexRange("sub-bass", fft,0,0));
	result.push(getIndexRange("low-mid", fft,0,0));
	result.push(getIndexRange("mid", fft,0,0));
	result.push(getIndexRange("high-mid", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	result.push(getIndexRange("brilliance", fft,0,0));
	result.push(getIndexRange("presence", fft,0,0));
	
	return result;
	
}
